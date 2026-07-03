const express=require("express");
const user = require("../models/user.models");
const userModels = require("../models/user.models");
const asyncHandler = require("../utils/asyncHandler");
const app=express();

const userCreate=asyncHandler(async(req,res)=>{
    const user=await{
        name,
        email,
    };
    user=req.body;
    return res.user(201).json({ name:"user.name",email:"user.email" })
});

