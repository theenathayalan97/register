"use strict"

const mongoose = require("mongoose");
const login = new mongoose.Schema({
    "firstname" : {type:String,required:true,trim:true},
    "lastname" : {type:String,required:true,trim:true},
    // "username" : "$firstname.$lastname",
    "birthday" : {type:String,required:true,trim:true},
    "password" : {type:String,required:true},
    "conformpassword":{type:String,required:true},
    "gender"   : {type:String,enum:['male', 'female', 'other'],required:true},
    "email"    : {type:String,required:true,trim:true,unique:true},
    "phoneno"  : {type:String,required:true,trim:true,unique:true},
    "address"  : {type:Array,required:true,trim:true},
    "state"    : {type:String,required:true,trim:true},
    "city"     : {type:String,required:true,trim:true},
    "pincode"  : {type:Number,required:true,trim:true},
    "country"  : {type:String,required:true},
    // "inactive" : {type:Date.now()},
     "active"    : Boolean,
     lastseen: {type: Date,default: Date.now}
},
    {
        timestamps:true,
        // lastseen:Date.now()
    }
);
// login.pre('save',function(next){
//     var user=this;
    
//     if(user.isModified('password')){
//         bcrypt.genSalt(salt,function(err,salt){
//             if(err)return next(err);

//             bcrypt.hash(user.password,salt,function(err,hash){
//                 if(err) return next(err);
//                 user.password=hash;
//                 user.conformpassword=hash;
//                 next();
//             })

//         })
//     }
//     else{
//         next();
//     }
// });

// login.methods.comparepassword=function(password,cb){
//     bcrypt.compare(password,this.password,function(err,isMatch){
//         if(err) return cb(next);
//         cb(null,isMatch);
//     });
// }

// login.methods.generateToken=function(cb){
//     var user =this;
//     var token=jwt.sign(user._id.toHexString(),confiq.SECRET);

//     user.token=token;
//     user.save(function(err,user){
//         if(err) return cb(err);
//         cb(null,user);
//     })
// }



module.exports=mongoose.model("front",login,"front")  