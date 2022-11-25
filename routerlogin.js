"use strict"

const router = require("express").Router();
const front = require("./loginschema");

// create data in database
router.post("/create",async(req,res)=>{
    try {
        const login = new front (req.body)
        const result = await login.save();
        res.status(200).json({"status":"success","message":"create the data","result":login})
    } catch (error) {
        res.status(500).json({"status":"failure","message":"something we wrong","result":error.message})
    }
})

// get the all data
router.get("/getall",async(req,res)=>{
    try {
        const login = await front.find()
        res.status(200).json({"status":"success","message":"get all the data","result":login})
    } catch (error) {
        res.status(500).json({"status":"failure","message":"something we wrong","result":error.message})
    }
})

// get indisuval data
router.get("/getindisuval",async(req,res)=>{
    try {
        const condition = {"email":req.query.email}
        const result = await front.findOne(condition)
        res.status(200).json({"status":"success","message":"get all the data","result":result})
    } catch (error) {
        res.status(500).json({"status":"failure","message":"something we wrong","result":error.message})
    }
})

// update data
router.put("/updateData",async(req,res)=>{
    try {
        // console.log(req.query.email)
        const condition = {"email":req.query.email}
        const update = req.body;
        const value = {new:true}
        const result = await front.findOneAndUpdate(condition,update,value)
        res.status(200).json({"status":"success","message":"update the data","result":result})
    } catch (error) {
        res.status(500).json({"status":"failure","message":"something we wrong","result":error.message})
    }
})

// delete data
router.delete("/delete",async(req,res)=>{
    try {
        const condition = {"email":req.query.email}
        const result = await front.findOneAndDelete(condition)
        res.status(200).json({"status":"success","message":"get all the data","result":result})
    } catch (error) {
        res.status(500).json({"status":"failure","message":"something we wrong","result":error.message})
    }
})

module.exports = router