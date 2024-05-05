const express=require('express')
const env=require('dotenv').config()
const mongoose=require('mongoose')
const cors=require('cors')
const Connection=require('./db/Connection.js').module
const app=require('./app.js').module


app.use(cors())
app.use(express.json())
const port=process.env.PORT || 6000

Connection().then(()=>{
    app.listen(process.env.PORT,()=>{
        console.log(`app listening on port ${process.env.PORT}`)
        console.log('database connected')
    })
})
.catch((err)=>console.log(err))

