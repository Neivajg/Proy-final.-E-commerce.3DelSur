const {Product, validateBody} = require('../models/product')
const express = require('express')
const {Category}= require('../models/category')
const router = express.Router()  

router.get('/', async (req, res) => {
    const products = await Product.find({})  
    res.send(products)
})

router.post('/',validateBody, async (req, res) => {
    const {name, price,imagen, categoryId}= req.body
    
    const category = await Category.findById(categoryId);

    console.log (category)
    if (!category) return res.status(400).send("categoria no encontrada");

    const products = new Product({name,price,imagen,category})
    await products.save()
    res.send(products)
})

router.put('/:id', async (req, res) => {
    const {name, price, categoryId}= req.body

    const category = await Category.findById(categoryId);
    if (!category) return res.status(400).send("categoria no encontrada");
    
    const products = await Product.findByIdAndUpdate(req.params.id, {name, price, categoryId}, {new: true})

    if(!products) return res.status(400).send("producto no encontrado")
    res.send(products)
})

router.delete('/:id', async (req, res) => {
    const products = await Product.findByIdAndDelete(req.params.id)
    
    if(!products) return res.status(400).send("producto no encontrado")
    res.send(products)
})

module.exports = router