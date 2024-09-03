const jwt = require('jsonwebtoken')
require('dotenv').config()
const JWT_Secret = process.env.JWT_SECRET_KEY

const fetchuser = (req,res,next) =>{
    const token = req.header('auth-token')
    if(!token){
        res.status(400).send({error:"Pleae authenticate using valid token"})

    }
    try{
        const data = jwt.verify(token,JWT_Secret)
        req.user = data.user//it includes user id for unique idnetification
        next()

    }
    catch(error){
        res.status(400).send({error:"Pleae authenticate using valid token"})
    }
}

module.exports = fetchuser