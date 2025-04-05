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

const hospitalInfo = async (req, res) => {
    
    try {
        const city = req.query.city; // Get city from query parameter (?city=...)
        if (!city) {
            return res.status(400).json({ msg: "City parameter is required" });
        }

        const hospitalData = await Hospital.find({ city });
        return res.status(200).json(hospitalData);
    } 
    catch (error) {
        return res.status(500).json({ msg: "Error in fetching data"});
    }
};

module.exports = {hospitalForm,hospitalInfo};