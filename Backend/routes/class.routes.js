const express=require('express')
const Router=express.Router()
const classController=require('../Controllers/class.controller.js').module
console.log(classController)
const upload=require('../middlewares/multer.js').module


Router.route('/new-class').post(upload.fields([
    {
        name:'image',
        maxCount:1
    },
    {
        name:'videoLink',
        maxCount:1
    }
]),classController.createClass)

exports.module=Router