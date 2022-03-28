const mongoose = require('mongoose');
const yachtSchema = mongoose.Schema({
    name: String,
    price: Number,
    length: Number,
    guest: Number,
    picture:
    {
        type: String,
        default: ''
    }
});

const yacht = mongoose.model('Yacht', yachtSchema);

module.exports = yacht;