const express = require("express");
const router=express.Router();
const authController=require("../controllers/auth-controller");
const validate = require("../middlewares/validate-middleware");
const {signupSchema,loginSchema} = require('../validators/auth-validators');

router.route("/").get(authController.home);

router.route("/register").post(validate(signupSchema),authController.register);

router.route("/login").post(validate(loginSchema),authController.login);

router.route("/about").get(authController.about);

module.exports=router;