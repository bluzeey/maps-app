require('./models/users')

const express=require('express');
const mongoose=require('mongoose')
const app=express()

const authRoutes=require('./routes/authRoutes')

app.use(express.json())
app.use(authRoutes)

const uri = "mongodb+srv://sahilm:sahilm123@cluster0.y7loy8w.mongodb.net/?retryWrites=true&w=majority";
mongoose.connect(uri)

mongoose.connection.on('connected', ()=>{
    console.log('There is no error!')
} );

mongoose.connection.on('error', (err)=>{
    console.log('There is error!' , err)
} );

app.get('/',(req,res)=>{
    res.send('Hello World!')
})

app.listen(3000,()=>{
    console.log('Backend server is working!')
})