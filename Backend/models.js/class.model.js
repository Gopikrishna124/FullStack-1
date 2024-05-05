const mongoose=require('mongoose')

const classSchema= new mongoose.Schema({

    FullName:{
        type:String
    },
    Age:{
        type:String
    }
 
},{timestamps:true})


exports.Class=mongoose.model("Class",classSchema)