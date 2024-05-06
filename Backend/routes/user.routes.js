const express=require('express')
const Router=express.Router()
const userController=require('../Controllers/user.controller.js').module


Router.route('/new-user').post(userController.createUser)

exports.module=Router