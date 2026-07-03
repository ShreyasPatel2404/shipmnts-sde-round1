const express = require("express");
const mongoose=require("mongoose");
const response=require("./response.constant")

const userSchema=mongoose.Schema({
    name:{
        type:String,
        require:true,
    },
    email:{
        type:String,
        require:true,
        unique:true,
    },
});

module.exports=mongoose.model("User",userSchema);