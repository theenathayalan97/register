"use strict"

const express = require("express");
const app = express();
require("dotenv").config();
const port = process.env.PORT || 8000 ;
const mongoose = require("mongoose");
// const bcrypt = require('bcrypt');
// const jwt=require('jsonwebtoken');
const salt=10;
const page = require("./routerlogin")
app.use(express.json());
app.use("/api/v1/login/",page);

// database connect
mongoose.connect("mongodb://localhost:27017/login").then((result) => {
    console.log("mongodb connect successfully")
}).catch((err) => {
    console.log(err,"mongodb not connects")
});



// health test
app.use("/healthtest",async(req,res)=>{
    try {
        const resut = "postmon"
        res.status(200).json({"status":"suceess","message":"running healthtest","result":resut})
        console.log(`connect ${result}`)
    } catch (error) {
        console.log(error)
    }
})


// listen port
app.listen(port,(err)=>{
    if(!err){
        console.log(`listen port http://localhost:${port}`)
    }else{
        console.log("port not connect")
})
