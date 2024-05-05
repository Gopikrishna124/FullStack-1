const express=require('express')
const mongoose=require('mongoose')
const env=require('dotenv').config()

const Connection=async(req,res)=>{
    try{
   await mongoose.connect(process.env.MONGO_URL)
    }
    catch(err){
       console.log(err)
    }
}

exports.module=Connection