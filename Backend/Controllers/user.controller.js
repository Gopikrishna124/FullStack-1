const express=require('express')
const User=require('../models.js/user.model').User
const ApiResponse=require('../utils/ApiResponse').module
const ApiError=require('../utils/Api.Error').module

const  createUser=async(req,res)=>{
    try{
        const user=new User(req.body)
         const result=await user.save()
         res.json(new ApiResponse(201,result,'user created successfully'))
    }
    catch(err){
        console.log(err)
        throw new ApiError(400,'something went wrong while creating user')
    }
}

exports.module={createUser}