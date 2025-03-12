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

const hospitalInfo = async(req,res) =>{
    try{
        const city='patna';
        const hospitalData=await Hospital.find({city});
        return res.status(200).send({msg:hospitalData});
    }
    catch(e){
        res.status(500).send({msg:"Error in fetching data"});
    }
}

module.exports = {hospitalForm,hospitalInfo};