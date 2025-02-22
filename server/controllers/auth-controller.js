const User=require("../models/user-model");


//home page logic
const home = async(req,res) =>{
    try{
        res.status(200).send("Hello from server side")
    }
    catch(e){
        res.status(400).send(`Error found -> ${e}`)
    }
}

//register page logic
const register = async(req,res) =>{
    try{
        const {username,contact,email,password,city} = req.body;

        const UserExist =await User.findOne({email});
        if(UserExist){
            return res.status(400).send({msg:"User Already Exists"});
        }
        const newUser = await User.create({username,contact,email,password,city});

        res.status(200).send({
            msg:"Registration Completed",
            token:await newUser.generateToken(),
            userId:newUser._id.toString()
        });
    }
    catch{
        res.status(500).send({msg:"Internal Server error"});
    }
}
//login page logic
const login = async(req,res) =>{
    try{
        res.status(200).send("Hello from server side from login")
    }
    catch(e){
        res.status(400).send(`Error found -> ${e}`)
    }
}
//about page logic
const about = async(req,res) =>{
    try{
        res.status(200).send("Hello from server side from about")
    }
    catch(e){
        res.status(400).send(`Error found -> ${e}`)
    }
}
//contact page logic
const contact = async(req,res) =>{
    try{
        res.status(200).send("Hello from server side from contact")
    }
    catch(e){
        res.status(400).send(`Error found -> ${e}`)
    }
}

module.exports={home,register,login,about,contact};