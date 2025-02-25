const express=require('express')
const router=express.Router();
const hospitalForm = require('../controllers/hospital-controller')

router.route('/formHospitalDetail').post(hospitalForm);

module.exports = router;