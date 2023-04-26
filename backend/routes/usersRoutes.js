const express=require("express")
const router=express.Router()
const User=require('../models/user')
const bcrypt = require('bcrypt');
const verify=require('./verifyToken')


//UPDATE
router.put("/:id", verify ,async (req,res)=>{
    if(req.user.id === req.params.id || req.user.isAdmin){
        if(req.body.password){

            const runde = 10
            const passHash = await bcrypt.hash(req.body.password, runde)

            req.body.password =passHash
        }

        try {
            const updatedUser=await User.findByIdAndUpdate(req.user.id,{$set:req.body})
            res.status(200).json(updatedUser)
            
        } catch (error) {
            res.status(500).json("Unlucky")
        }
    }
    else{
        res.status(403).json("You can update only your account")
    }
} )

//DELETE

//GET

//GET ALL

// GET USER STATS
// const { register } =require( "../controllers/users.js")

// router.post("/register",register)

// router.post("/login",async(req,res)=>{

//     const {email,password}=req.body;

//     try {
//         const user=await User.findOne({email:email,password:password})
//         if(user){
//             res.send(user)
//         }
//         else{
//             return res.status(400).json("Login failed")
//         }
//     } catch (error) {
//         return res.status(400).json({error})
//     }
// })



module.exports=router;