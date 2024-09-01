require('dotenv').config()
const express = require("express");
const User = require("../Modal/User");
const Product = require("../Modal/Product");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { body, validationResult } = require("express-validator");

const JWT_Secret= process.env.JWT_SECRET_KEY;
console.log(JWT_Secret);

router.get("/", (req, res) => {
  obj = {
    a: "Guragain",
    b: "pratik",
  };
  res.send(obj);
});

router.post("/createproduct", (req, res) => {
  console.log(req.body);
  const product = Product(req.body);
  product
    .save()
    .then(() => res.send(req.body))
    .catch((err) => res.status(400).send(err));
});

router.post(
  "/createuser",
  [
    body("name").isLength({ min: 3 }),
    body("email").isEmail(),
    body("password").isLength({ min: 5 }),
  ],
  async (req, res) => {
    /* console.log(req.body);
    const user = User(req.body);
    user.save();
    res.send(req.body); */

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    try {
      let user = await User.findOne({ email: req.body.email });
      if (user) {
        return res.status(400).json({ errors: "user already exist" });
      }
      const salt = await bcrypt.genSalt(10);
      secPass = await bcrypt.hash(req.body.password, salt);
      user = await User.create({
        name: req.body.name,
        email: req.body.email,
        password: secPass,
      });
      const data = {
        user: {
          id: user.id,
        },
      };
      const authToken = jwt.sign(data, JWT_Secret);
      console.log(authToken);

      res.json({ user, authToken });
    } catch (error) {
      res.status(500).send("Internal Server error");
    }
  }
);

router.post(
  "/login",
  [
    body("email").isEmail(),
    body("password").isLength({ min: 5 }),
  ],
  async (req, res) => {
     
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
     const {email,password} = req.body
     try {
      let user= await User.findOne({email})
      if(!user){
        return res.status(400).json({errors:"user Not Found"})
      }
       const passwordCompare = await  bcrypt.compare(password,user.password)
       if(!passwordCompare){
        return res.status(400).json({errors:"password not matching"})
       } 

       const data = {
        user: {
          id: user.id,
        },
      };
      const authToken = jwt.sign(data,JWT_Secret);
      console.log(authToken);
      res.json({ user, authToken });
     } catch (error) {
      res.status(500).send("Internal Server error");
     }
    })

module.exports = router;
