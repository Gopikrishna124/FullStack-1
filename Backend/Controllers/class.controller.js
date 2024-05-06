const express=require('express')
const mongoose=require('mongoose')
let  Class=require('../models.js/class.model.js').Class
const ApiError=require('../utils/Api.Error.js').module
const ApiResponse=require('../utils/ApiResponse.js').module
const uploadOncloudinary=require('../utils/cloudinary.js').module


const createClass=async(req,res)=>{  

    //     const localImageFile=req.files?.image[0]?.path
    //     const localvideoLinkFile=req.files?.videoLink[0]?.path

    //    if(!localImageFile){
    //     throw new ApiError(400,'image is required')
    //    }
    //    if(!localvideoLinkFile){
    //     throw new ApiError(400,'videoLinkFile is required')
    //    }
    //     const imageFile=await uploadOncloudinary(localImageFile)

    //     if(!imageFile){
    //         throw new ApiError(500,'something went wrong while uploading imagefile in cloudinary')
    //     }

    //     const videoLinkFile=await uploadOncloudinary(localvideoLinkFile)

    //     if(!videoLinkFile){
    //        throw new ApiError(500,'something went wrong while uploading videoLink in cloudinary')
    //     }

        
        const classes=new Class(req.body)
        const result=await classes.save()
        res.json(new ApiResponse(201,result,'class created successfully'))

         
    
}

exports.module={createClass}