const app = require('./backend/app');

// const PORT = process.env.PORT || 80;
// var server = app.listen(PORT, function() {
//     var host = server.address().address;
//     var port = server.address().port;
//     console.log("server is listening at", host, port);
// });
app.listen(process.env.PORT || 3000, () => {
    console.log(`Server listening on PORT ${process.env.PORT} `);
});


