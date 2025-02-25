const Contact_model = require('../models/contact-model') 

const contact = async(req,res) =>{
    try{
        const message=req.body;
        Contact_model.create(message);
        res.status(200).send({"msg":"Message sent successfully"})
    }
    catch(e){
       next(e)
    }
}

module.exports = contact;