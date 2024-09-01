const express = require("express");
const User = require("../Modal/User");
const Product = require("../Modal/Product");
const router = express.Router();
const bcrypt = require('bcryptjs');
const { body, validationResult } = require("express-validator");
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
  async(req, res) => {
    /* console.log(req.body);
    const user = User(req.body);
    user.save();
    res.send(req.body); */

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    let user = await User.findOne({email:req.body.email})
    if (user){
        return res.status(400).json({errors:"user already exist"})
    }
    const salt = await bcrypt.genSalt(10)
     secPass = await bcrypt.hash(req.body.password,salt)
     user = await User.create({
      name: req.body.name,
      email: req.body.email,
      password: secPass
    }).then((user) => res.json(user));
  }
);

module.exports = router;
