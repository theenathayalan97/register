"use strict"

const router = require("express").Router();
const { deleteMany } = require("./loginschema");
const front = require("./loginschema");

// create data in database || signin
router.post("/create",async(req,res)=>{
    try {
        const login = new front (req.body)
        if(login.password==login.conformpassword){
            const result = await login.save();
        res.status(200).json({"status":"success","message":"create the data","result":login})
        }else{
            res.status(400).json({"status":"failure","message":"check the password"})
        }
    } catch (error) {
        res.status(500).json({"status":"failure","message":"something we wrong","result":error.message})
    }
})

// reset password
router.post("/resetpassword",async(req,res)=>{
    try {
        console.log("repassword")
        const email = {"email":req.query.email};
        // ?console.log(email)

        const repassword = await front.findOne(email)
        // console.log(repassword)
        const email1 = req.query
        console.log(email1)
        if(repassword.password==req.body.oldpassword){
            // console.log("password correct")
                    console.log("update process")
                   
                    const value =req.body
                    console.log(value)
                    if(value.newPassword==value.conformpassword){
                        console.log("repassword")
                        const condition = {"email":req.query.email};
                        const update = req.body
                        const option = {new:true}
                        // const result = await front.findOneAndUpdate(condition,update,option)
                        let result = "wertyuio"
                        res.status(200).json({"status":"success","message":"create the new password","result":result})
                    }else{
                        console.log("err")
                        res.status(400).json({"status":"failure","message":"check the password","result":"err.message"})
                    }                
        
        }else{
            console.log("error")
            res.status(400).json({"status":"failure","message":"check the old password","result":"err.message"})
        }
    } catch (error) {
        res.status(500).json({"status":"failure","message":"something we wrong","result":error.message})
    }
})


 
// forgetpassward
router.put("/forgetpassword",async(req,res)=>{
    try {
        const condition = {"email":req.query.email}
        const result = await front.findOne(condition)
        // delete result.password;
        // delete result.conformpassword;
        // console.log(result)
        // console.log(delete result.password);
        const password = req.body.password;
        const conformpassword = req.body.conformpassword;
        // console.log(newPassword)
        // console.log(conPassword)
        if(password == conformpassword){
            const condition = {"email":req.query.email}
            const update = req.body
            const option = {new:true}
            const result = await front.findOneAndUpdate(condition,update,option)
            // const result = "change the password"
            res.status(200).json({"status":"success","message":"update the password","result":result})
        }else{
            console.log("check the password")
        }

    } catch (error) {
        res.status(500).json({"status":"failure","message":"something we wrong"})
        
    }
})

// login API
router.post("/login",async(req,res)=>{
    try {
        const condition = {"email":req.body.email}
        // const password = {"password":req.body.password}
        const user = await front.findOne(condition)
        // console.log(user)
        if(user){
            if(user.password==req.body.password){
                // console.log("success")
            res.status(200).json({"status":"success","message":"login successfully","result":user})
            }else{
                console.log("please check password")
                res.status(400).json({"status":"failure","message":"please password"})
            }
        }else{
            console.log("please signin")
            res.status(400).json({"status":"failure","message":"please register"})
        }
        
    } catch (error) {
        console.log(error)
        return res.status(400).json({"status":"failure","message":"something went wrong","result":error.message})
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


// LOGIN
// router.post('/login',async (req,res)=>{
//     let login =await front.find(req.body.email)
//     const signin = req.query.email;
//     // console.log(signin)
//     console.log(login)
//     if (!login || !bcrypt.compareSync(signin, login)){
//         console.log("error")
//     }else{
//         // front.findOne({'email':req.body.email},function(err,front){
//         //     if(!front)return res.json({"not found"})
//         // })
//     //     console.log("success")
//     //     res.status(200).json({"status":"success","message":"welcome to page","result":login}) 
//     }
// })


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