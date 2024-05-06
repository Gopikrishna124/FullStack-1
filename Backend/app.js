const express=require('express')
const app=express()
const classRouter=require('./routes/class.routes.js').module
const userRouter=require('./routes/user.routes.js').module

app.use(express.json())
app.use(express.urlencoded({extended:true,limit:'20kb'}))



app.use('/api/classes',classRouter)
app.use('/api/users',userRouter)


exports.module=app