const User=require("../models/user-model");
const Driver=require("../models/driver-model");
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

//register page logic for users
const registerUser = async(req,res) =>{
    try{
        const {username,phone,email,password,city} = req.body;

        const UserExist =await User.findOne({email});
        if(UserExist){
            return res.status(400).send({message:"User Already Exists"});
        }
        const newUser = await User.create({username,phone,email,password,city});

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


//register page logic for driver
const registerDriver = async(req,res) =>{
    try{
        const {username,email,phone,password,city,vehicleNo} = req.body;

        const UserExist =await Driver.findOne({email});
        if(UserExist){
            return res.status(400).send({message:"User Already Exists"});
        }
        const newUser = await Driver.create({username,phone,email,password,city,vehicleNo});

        res.status(200).send({
            msg:"Registration Completed",
            token:await newUser.generateToken(),
            userId:newUser._id.toString()
        });
    }
    catch(e){
        console.log(e);
        // next(e);
    }
}


//login page logic for users
const loginUser = async(req,res) =>{
    try{
        const {email,password} = req.body;
        const UserExist = await User.findOne({email});
        if(!UserExist){
            return res.status(400).send({message:"Invalid Credentials"});
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
                res.status(401).json({message:"Invalid email or password"});
            }
        }
    }
    catch(e){
        next(e)
    }
}


//login page logic for driver
const loginDriver = async(req,res) =>{
    try{
        const {email,password} = req.body;
        const UserExist = await Driver.findOne({email});
        if(!UserExist){
            return res.status(400).send({message:"Invalid Credentials"});
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
                res.status(401).send({message:"Invalid email or password"});
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

/*-------
---------User---------
-------*/

const user = async(req,res) =>{
    try{
        const userData=req.user //Contains all our data
        console.log("Auth controller side:- ",userData)
        res.status(200).json({userData})
    }
    catch(err){
        res.status(400).json({msg : "Error in fetching data"})
    }
}

module.exports={home,registerUser,loginUser,about,registerDriver,loginDriver,user};