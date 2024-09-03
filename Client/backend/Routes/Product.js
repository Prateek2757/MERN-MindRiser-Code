const express = require("express");
const Product = require("../Modal/Product");
const fetchuser = require("../middleware/featchuser");
const { body, validationResult } = require("express-validator");
const router = express.Router();

router.get("/getall", fetchuser, async (req, res) => {
  try {
    const products = await Product.find({ user: req.user.id });//user vaneko modal user ko ref ho product ko user id ra user ko id milo vaney tesko data fecth garney
    res.json(products);
  } catch {
    res.status(500).send("Internal Server Error");
  }
});
//add products
router.post(
  "/addproduct",
  fetchuser,
  [
    body("title").isLength({ min: 3 }),
    body("description").isLength({ min: 5 }),
  ],
  async (req, res) => {
    try {
      const { title, description, price, instock } = req.body;
      const error = validationResult(req);
      if (!error.isEmpty()) {
        res.status(400).json({ error: error.array() });
      }
      const product = new Product({
        title,
        description,
        price,
        instock,
        user: req.user.id,
      });
      const savedProduct = await product.save();
      res.json(savedProduct);
    } catch (error) {
      res.status(500).send("Internal Server error");
    }
  }
);

//update product
router.put("/updateproduct/:id", fetchuser, async (req, res) => {
  const { title, description, price, instock } = req.body;
  try {
    const newProduct = {};
    if (title) {newProduct.title = title}
    if (description) {newProduct.description = description}
    if (price) {newProduct.price = price}
    if (instock) {newProduct.instock = instock}
    let product = await Product.findById(req.params.id)
    if(!product){
        return res.status(406).send('not found')
    }
    if(!product.user ||product.user.toString()!==req.user.id){
        return res.status(406).send('not Allowed')
    }
    product = await Product.findByIdAndUpdate(req.params.id,{$set:newProduct},{new:true})
    res.json(product)
  } catch (error) {
    return res.status(406).send('Internal Server Error')
  }
});
module.exports = router;
