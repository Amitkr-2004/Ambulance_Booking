const Hospital=require('../models/hospitalDetails-model')

const getUniqueCities = async(req,res) =>{
    try {
        const cities = await Hospital.distinct('city');
        res.status(200).json({
            success: true,
            count: cities.length,
            data: cities.sort() // Sort alphabetically
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({
            success: false,
            message: 'Server error while fetching cities'
        });
    }
};

module.exports=getUniqueCities;