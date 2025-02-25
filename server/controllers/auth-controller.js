const User=require("../models/user-model");
const bcrypt=require('bcrypt')


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
    catch(e){
        next(e);
    }
}
//login page logic
const login = async(req,res) =>{
    try{
        const {email,password} = req.body;
        const UserExist = await User.findOne({email});
        if(!UserExist){
            return res.status(400).send({msg:"Invalid Credentials"});
        }
        else{
            const user = await UserExist.ComparePassword(password);

            if(user){
                res.status(200).send({
                    msg:"Login Completed",
                    token:await UserExist.generateToken(),
                    userId:UserExist._id.toString()
                });
            }
            else{
                res.status(401).send({msg:"Invalid email or password"});
            }
        }
    }
    catch(e){
        next(e)
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

module.exports={home,register,login,about};