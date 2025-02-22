const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken")

const userSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true,
    },
    contact:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
    },
    password:{
        type:String,
        required:true,
    },
    city:{
        type:String,
        required:true,
    },
    isDriver:{
        type:Boolean,
        default:false
    },
    isAdmin:{
        type:Boolean,
        default:false
    },
    isVerified:{
        type:Boolean,
        default:false
    }
});

//define the model or collection name

userSchema.pre('save',async function(){   //middleware used for encryption of password
    const user = this;

    if(!user.isModified('password')){
        next();
    }

    try{
        const saltRound = await bcrypt.genSalt(10);
        const hash_password = await bcrypt.hash(this.password,saltRound)
        this.password=hash_password;
    }
    catch(e){
        next(e);
    }
});

//JWT token used for session login upto 30d
userSchema.methods.generateToken = async function(){
    try{
        return jwt.sign({
            usedId:this._id.toString(),
            email:this.email,
            isAdmin:this.isAdmin
        },
        process.env.SECRET_KEY,
        {
            expiresIn:'30d',
        }
    );
    }
    catch(e){
        console.error(e);
    }
}


const User = new mongoose.model("User",userSchema);

module.exports = User;