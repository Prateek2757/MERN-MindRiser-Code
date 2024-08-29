const express = require('express');
const User = require('../Modal/User');
const Product = require('../Modal/Product')
const router = express.Router()

router.get("/",(req,res)=>{
   obj ={
    a:"Guragain",
    b:"pratik"
   }
   res.send(obj);
})

router.post("/createproduct",(req,res)=>{
console.log(req.body);
const product = Product(req.body)
product.save()
.then(()=>res.send(req.body))
.catch(err=>res.status(400).send(err))


})

router.post("/createuser",(req,res)=>{
    console.log(req.body);
    const user = User(req.body);
    user.save()
    res.send(req.body)

    
})

module.exports = router