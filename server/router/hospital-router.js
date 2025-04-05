const express=require('express')
const router=express.Router();
const {hospitalForm,hospitalInfo} = require('../controllers/hospital-controller')
const getUniqueCities = require('../controllers/Get-Unique-Cities'); // Path to your controller

router.route('/formHospitalDetail').post(hospitalForm);
router.route('/fetchHospitalInfo').get(hospitalInfo);
router.get('/cities/unique', getUniqueCities);

module.exports = router;