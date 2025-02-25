const express = require("express");
const router=express.Router();
const contactController=require("../controllers/contact-controller")
const {signupSchema,loginSchema,contactSchema} =require('../validators/auth-validators')
const validate=require('../middlewares/validate-middleware')

router.route("/contact").post(validate(contactSchema),contactController);

module.exports = router;