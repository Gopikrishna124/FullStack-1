const v2=require('cloudinary').v2

const fs=require('fs')
const dotenv=require('dotenv').config()
          
v2.config({ 
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
    api_key: process.env.CLOUDINARY_API_KEY, 
    api_secret:process.env.CLOUDINARY_API_SECRET
  });
  


  const uploadOncloudinary=async(localFilePath)=>{
     
    try{
      if(!localFilePath) return null

      const response= await  v2.uploader.upload(localFilePath,{resource_type:'auto'})
      console.log(response.url)
        fs.unlinkSync(localFilePath)
        return response
    }
    catch(err){
       fs.unlinkSync(localFilePath)
       return null
    }
  }

  exports.module=uploadOncloudinary