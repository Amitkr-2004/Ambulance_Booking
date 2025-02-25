const Hospital = require('../models/hospitalDetails-model')

const hospitalForm = async(req,res) =>{
    try{
        const response=req.body;
        await Hospital.create(response);
        return res.status(201).json({msg:"Hospital detail Stored Successfully"});
    }
    catch(e){
        next(e);
    }
}

module.exports = hospitalForm;