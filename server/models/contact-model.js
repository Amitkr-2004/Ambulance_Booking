const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
    },
    message:{
        type:String,
        required:true,
    },
})

const ContactUser = new mongoose.model("ContactUser",userSchema) 

module.exports=ContactUser;