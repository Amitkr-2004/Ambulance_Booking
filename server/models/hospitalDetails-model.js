const mongoose = require('mongoose');

const hospitalSchema =new mongoose.Schema({
    city:{
        type:String,
        required:true
    },
    hospitalName:{
        type:String,
        required:true
    },
    distance:{
        type:String,
        required:true
    },
    rating:{
        type:String,
        required:true
    }
})

const Hospital = new mongoose.model('Hospital',hospitalSchema);
module.exports = Hospital; 