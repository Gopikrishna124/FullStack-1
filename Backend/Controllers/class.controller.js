const express=require('express')
const mongoose=require('mongoose')
let  Class=require('../models.js/class.model.js').Class
console.log(Class)


let  createClass=async(req,res)=>{
    try{
        
        let classes=new Class(req.body)
        let result= await classes.save()
        res.json('class created successfully')

         
    }
    catch(err){
           res.json(err)
    }
}

exports.module={createClass}