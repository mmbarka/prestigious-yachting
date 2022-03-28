const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const dotenv = require('dotenv');
const app = express();


dotenv.config();


// Serve only the static files form the dist directory
app.use(express.static(__dirname + '/dist/prestigiou-ysachting'));

app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname + '/dist/prestigious-yachting/index.html'));
});



app.use(express.urlencoded({ extended: true }));
app.use(express.json());


mongoose.connect(
    process.env.MONGO_URL,
    {
        useUnifiedTopology: true,
        useNewUrlParser: true,
    },
    () => {
        console.log("DB connected!!");
    }
);


const Yacht = require('./models/yacht');
// Security configuration
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
        "Access-Control-Allow-Headers",
        "Origin, Accept, Content-Type, X-Requested-with"
    );
    res.setHeader(
        "Access-Control-Allow-Methods",
        "GET, POST, DELETE, OPTIONS, PATCH, PUT"
    );
    next();
});


//add yacht

app.post('/yachts/add', (req, res) => {
    const yacht = new Yacht({
        name: req.body.name,
        price: req.body.price,
        length: req.body.length,
        guest: req.body.guest,
        picture: req.body.picture,
    });

    yacht.save((err, result) => {
        if (err) {
            console.log('here error into BE ', err);
        } else {
            res.status(200).json(
                {
                    message: 'yacht added with success'
                }
            );
        }
    });
});
//get All yachts
app.get('/yachts', async (req, res) => {
    await Yacht.find().then(
        (result) => {

            res.status(200).json({
                yachts: result
            })

        }
    )
});
module.exports = app;