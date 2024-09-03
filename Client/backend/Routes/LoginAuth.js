const express = require("express");
const router = express.Router();
const { body, validationResult } = require("express-validator");
const User = require("../Modal/User");
const fetchuser = require("../middleware/featchuser");
const bcrypt = require("bcryptjs")
router.put(
  "/updatepassword/:id",
  [body("password").isLength({min : 5})],
  async (req, res) => {

    const { name, password } = req.body;
    const error = validationResult(req);
          if(!error.isEmpty()){
            res.status(404).send({error:error.array()})
          }

    try {
         const salt = await bcrypt.genSalt(10)
          const secPassword = await bcrypt.hash(password,salt)
          const newPassword={}
          if(secPassword){newPassword.password = secPassword}
          
          let user = await User.findById(req.params.id)
          if(!user){
            return res.status(404).send("User Not Found")
          }

          user = await User.findByIdAndUpdate(req.params.id,{$set:newPassword},{new:true})
          res.json(user)
    } catch (error) {
       return res.status(400).send("Internal Server Error")
    }
  }
);

module.exports = router
 