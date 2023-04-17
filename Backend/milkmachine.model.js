const mongoose = require('mongoose');
const Schema = mongoose.Schema;


MilkMachines = new Schema({
    mnumber: {
        type: String
    },
    machinetype: {
        type: String
    },
    manpower: {
        type: String
    },
    place: {
        type: String
    },
    owner: {
        type: String
    }
}, {
    collation: 'milkmachines'
});

module.exports = mongoose.model('MilkMachines',MilkMachines);