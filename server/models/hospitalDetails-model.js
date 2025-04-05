const mongoose = require('mongoose');

const hospitalSchema =new mongoose.Schema({
    mainText: {
        type: String,
        required: true,
    },
    city: {
        type: String,
        required: true,
    },
    commonName:{
        type: String,
        required: true,
    },
    distance:{
        type: String,
        required: true,
    },
    rating:{
        type: String,
        require:true,
    }
});

const Hospital = new mongoose.model('Hospital',hospitalSchema);
module.exports = Hospital; 