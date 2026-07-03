const express = require("express");
const mongoose=require("mongoose");
const response=require("./response.constant")

const responseSchema=mongoose.Schema({
    fromUserId:{
        type:Date.now(),
    },
    toUserId:{
        type:Date.now(),
    },
    status:{
        enum:status,
    },
    createdat:{
        type:string,
    },
});

module.exports=mongoose.model("response",responseSchema);