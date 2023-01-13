const {Product, validateBody} = require('../models/product')
const express = require('express')
const {Category}= require('../models/category') 
const {
  upload,
  removeImage,
} = require("../models/product");
const auth = require("../middleware/auth");
const admin = require("../middleware/admin");

const router = express.Router();


router.get('/', async (req, res) => {
    const products = await Product.find({})  
    res.send(products)
})

router.post('/', [auth, admin],upload.single("imagen"),validateBody, async (req, res) => {
    const {name, price, categoryId}= req.body
    const { path: imagen, filename: cloudinaryId } = req.file;

    const category = await Category.findById(categoryId);

    console.log (category)
    if (!category) return res.status(400).send("categoria no encontrada");

    const products = new Product({name,price,imagen,category,cloudinaryId})
    await products.save()
    res.send(products)
})

router.put('/:id',auth, upload.single("image"), validateBody,async (req, res) => {
    const {name, price, categoryId}= req.body
    const { path: image, filename: cloudinaryId } = req.file;

    const category = await Category.findById(categoryId);
    if (!category) return res.status(400).send("categoria no encontrada");
    
    await removeImage(products.cloudinaryId);

    let products = await Product.findByIdAndUpdate(req.params.id, {name, price, categoryId,image, cloudinaryId }, {new: true})
    if(!products) return res.status(400).send("producto no encontrado")

    res.send(products)
})

router.delete('/:id', async (req, res) => {
    const products = await Product.findByIdAndDelete(req.params.id)
    
    if(!products) return res.status(400).send("producto no encontrado")
    res.send(products)
})

module.exports = router