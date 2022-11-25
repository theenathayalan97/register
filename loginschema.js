"use strict"

const mongoose = require("mongoose");
const login = new mongoose.Schema({
    "firstname" : {type:String,required:true,trim:true},
    "lastname" : {type:String,required:true,trim:true},
    // "username" : "$firstname.$lastname",
    "birthday" : {type:String,required:true,trim:true},
    "gender"   : {type:String,enum:['point'],required:true},
    "email"    : {type:String,required:true,trim:true,unique:true},
    "phoneno"  : {type:Number,required:true,trim:true,unique:true},
    "address"  : {type:Array,required:true,trim:true},
    "state"    : {type:String,required:true,trim:true},
    "city"     : {type:String,required:true,trim:true},
    "pincode"  : {type:Number,required:true,trim:true},
    "country"  : {type:String,enum:['point'],required:true},
    // "inactive" : {type:Date.now()},
     "active"    : Boolean,
     lastseen: {type: Date,default: Date.now}
},
    {
        timestamps:true,
        // lastseen:Date.now()
    }
);

module.exports=mongoose.model("front",login,"front")  