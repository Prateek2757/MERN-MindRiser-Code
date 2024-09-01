const express = require("express");
const LoginUser = require("../Modal/loginUser");
const router = express.Router();
const bcrypt = require("bcryptjs");
const { body, validationResult } = require("express-validator");

router.post( 
  "/loginuser",
  [body("email").isEmail(), body("password").isLength({ min: 5 })],
  async (req, res) => {
    /*  console.log(req.body);
    const loginUser = LoginUSer(req.body);
    loginUser.save();
    await res.send(req.body); */
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    let loginuser = await LoginUser.findOne({ email: req.body.email });
    if (loginuser) {
      return res.status(400).json({ errors: "User Already Exits" });
    }
    const salt = await bcrypt.genSalt(10);
    let securePass = await bcrypt.hash(req.body.password,salt);
    loginuser = await LoginUser.create({
      email: req.body.email,
      password: securePass,
    }).then((loginuser) => res.json(loginuser));
  }
);

module.exports = router;
