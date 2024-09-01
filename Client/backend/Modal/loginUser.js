const mongoose = require('mongoose')
const{Schema} = mongoose

const loginuser = new Schema({
    email:{
     type : String,
     required:true
    },
    password:{
        type: String,
        required:true
    }
})

const Loginuser = mongoose.model('LoginUser',loginuser)
module.exports = Loginuser;