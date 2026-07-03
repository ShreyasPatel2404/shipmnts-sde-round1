const express=require("express");
const user = require("../models/user.models");
const userModels = require("../models/user.models");
const asyncHandler = require("../utils/asyncHandler");
const responseModels = require("../models/response.models");
const app=express();
const response=require("../models/response.models")

const requestContoller=asyncHandler(await,(req,res)=>{
    const request=await,{
        responseModels,
    }
    requestans=request.body;
    return res.request(201).json({ requestModels });
});

const responseController=asyncHandler(await,(req,res)=>{
    const request=await,{
        responseModels
    }
    responseans=response.body;
    return res.status(201).json({responseModels});
});