const express = require("express");
const mongoose=require("mongoose");

const ratesSchema=mongoose.Schema({
    type:{
        enum:type,
        require:true,
    },
    fromLocation:{
        type:String,
        require:true,
    },
    toLocation:{
        type:String,
        require:true,
    },
    validFrom:{
        type:Date.now(),
        require:true,
    },
    validTo:{
        type:Date.now(),
        require:true,
    },
    price:{
        type:Number,
        
    }
});

module.exports=mongoose.model("User",ratesSchema);