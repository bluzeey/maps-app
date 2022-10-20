const express=require('express');
const mongoose=require('mongoose')
const User=mongoose.model('User');

const router=express.Router()

router.post('/signup',async(req,res)=>{
    
    const {email,password}=req.body
    try{
        const user=new User({email,password});
        await user.save()
     }catch(err){
        res.status(422).send("There seems to be some error",err)
     }
 
    res.send("The user is signed up!")
})

module.exports=router