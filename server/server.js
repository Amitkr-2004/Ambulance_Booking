require("dotenv").config();
const express=require("express");
const app=express();
const router=require("./router/auth-router");
const contactForm=require("./router/contact-router");
const hospitalRoute=require('./router/hospital-router')
const connectDb=require("./utils/db");
const errorMiddleware = require("./middlewares/error-middleware");

app.use(express.json());    //middleware used to make backend compatible for fetching and sending json date

app.use("/api/auth",router);        //router page
app.use("/api/form",contactForm);        //contact page
app.use("/api/hospital",hospitalRoute)

app.use(errorMiddleware)

const PORT=process.env.PORT;

connectDb().then(()=>{
    app.listen(PORT,()=>{
        console.log(`server is running at port ${PORT}`);
    });
})
