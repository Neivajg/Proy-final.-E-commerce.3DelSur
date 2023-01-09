const {Product, validateBody} = require('../models/product')
const express = require('express')
const router = express.Router()  

router.get('/', async (req, res) => {
    const products = await Product.find({})  

    res.send(products)
})

router.post('/',validateBody, async (req, res) => {

    const products = new Product(req.body)
   
    await products.save()
    
    res.send(products)
})

router.put('/:id', async (req, res) => {
    const {error} = validate(req.body)
    if (error) return res.status(400).send(error.details[0].message)
    
    const products = await Product.findByIdAndUpdate(req.params.id, req.body, {new: true})

    res.send(products)
})

router.delete('/:id', async (req, res) => {
    const products = await Product.findByIdAndDelete(req.params.id)

    res.send(products)
})

module.exports = router