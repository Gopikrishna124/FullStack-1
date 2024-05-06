const mongoose=require('mongoose')

const userSchema=new mongoose.Schema({

      FullName:{
        type:String
      },
      email:{
         type:String
      }
},{timestamps:true})


exports.User=mongoose.model('User',userSchema)