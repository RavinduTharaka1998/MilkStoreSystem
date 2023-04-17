const mongoose = require('mongoose');
const Schema = mongoose.Schema;


MilkTanks = new Schema({
    tnumber: {
        type: String
    },
    milktype: {
        type: String
    },
    capacity: {
        type: String
    },
    place: {
        type: String
    },
    owner: {
        type: String
    },
    date: {
        type: String
    },
    time: {
        type: String
    }
}, {
    collation: 'milktanks'
});

module.exports = mongoose.model('MilkTanks',MilkTanks);