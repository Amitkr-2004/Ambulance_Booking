const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

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
    console.log(this);
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
})

const User = new mongoose.model("User",userSchema);

module.exports = User;