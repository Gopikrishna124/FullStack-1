const express=require('express')
const app=express()
const classRouter=require('./routes/class.routes.js').module
app.use(express.json())
app.use('/api/classes',classRouter)



exports.module=app