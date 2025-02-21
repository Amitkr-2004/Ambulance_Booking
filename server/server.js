const express=require("express");
const app=express();
const router=require("./router/auth-router")

app.use(express.json());    //middleware used to make backend compatible for fetching and sending json date

app.use("/api/auth",router);        //router page

const PORT=5000;

app.listen(PORT,()=>{
    console.log(`server is running at port ${PORT}`);
})