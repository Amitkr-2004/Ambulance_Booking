const express = require("express");
const router=express.Router();
const authController=require("../controllers/auth-controller")

router.route("/").get(authController.home);

router.route("/register").post(authController.register);

router.route("/login").get(authController.login);

router.route("/about").get(authController.about);

router.route("/contact").get(authController.contact);

module.exports=router;