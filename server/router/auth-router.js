const express = require("express");
const router=express.Router();
const authController=require("../controllers/auth-controller");
const validate = require("../middlewares/validate-middleware");
const {UserSignupSchema,UserLoginSchema,DriverSignupSchema,DriverLoginSchema} = require('../validators/auth-validators');
const authMiddleware=require("../middlewares/auth-middleware")

router.route("/").get(authController.home);

router.route("/register/userRegistration").post(validate(UserSignupSchema),authController.registerUser);

router.route("/login/userLogin").post(validate(UserLoginSchema),authController.loginUser);

router.route("/register/driverRegistration").post(validate(DriverSignupSchema),authController.registerDriver);

router.route("/login/driverLogin").post(validate(DriverLoginSchema),authController.loginDriver);

router.route("/user").get(authMiddleware,authController.user);

module.exports=router;