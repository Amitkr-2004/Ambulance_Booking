const jwt=require('jsonwebtoken')
const User=require("../models/user-model")

const authMiddleware= async(req,res,next) =>{
    
        const token=req.header("Authorization")
        if(!token){
            res.status(400).json({message:"Unauthorized HTTP Token not Provided"})
        }
        const jwtToken=token.replace("Bearer","").trim()
        // console.log("token from auth middleware" , jwtToken)

        try{
            const isVerify=jwt.verify(jwtToken,process.env.SECRET_KEY);
            // console.log(isVerify);    
            
            const userData=await User.findOne({email:isVerify.email})
            .select({password:0});
            // console.log(userData) //This will give us our payload that we have provided while authentication ->userId,email,isAdmin

            //custom Properties
            req.user=userData;
            req.token=token;
            req.userID=userData._id;
            next();
        
        }
    catch(err){
        console.log(err)
    }
}

module.exports = authMiddleware;