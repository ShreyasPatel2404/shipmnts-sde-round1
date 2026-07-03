const express=require("express");
const user = require("../models/user.models");
const userModels = require("../models/user.models");
const asyncHandler = require("../utils/asyncHandler");
const ratesModels = require("../models/rates.models");
const app=express();

const searchRate=asyncHandler(async(req,res)=>{
    const search=req.body();
    const Rate=search-rates.price;
    return res.user(201).json({ sucess:"true",message:"Rate created successfully" });
})