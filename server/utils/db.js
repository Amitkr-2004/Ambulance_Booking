const mongoose = require("mongoose");

const URI=process.env.DATABASE;

const connectDb = async() =>{
    try{
        await mongoose.connect(URI);
        console.log("MongoDB connection successful ");
    }
    catch(e){
        console.log("MongoDB Connection Failed");
        process.exit(0);
    }
}

module.exports = connectDb;