const express=require('express')
const Router=express.Router()
const classController=require('../Controllers/class.controller.js').module
console.log(classController)



Router.route('/new-class').post(classController.createClass)

exports.module=Router