const mongoose=require('mongoose')

const classSchema= new mongoose.Schema({

    name:{
        type:String,
    
    },
    image:{
        type:String
    },
    availableSeats:{
        type:String
    },
    price:{
        type:String
    },
    videoLink:{
        type:String
    },
    description:{
        type:String
    },
    instructorName:{
        type:String
    },
    instructorEmail:{
        type:String
    },
    status:{
        type:String
    },
    submitted:{
       type:String
    },
    totalEnrolled:{
         type:Number
    },
    reason:{
        type:String
    }

    
 
},{timestamps:true})


exports.Class=mongoose.model("Class",classSchema)