const {Category, validateBody} = require('../models/category')
const express = require('express')
const router = express.Router()  

router.get('/', async (req, res) => {
    const Categories = await Category.find({})  
    
    res.send(Categories)
})

router.post('/',validateBody, async (req, res) => {
    
    const Categories = new Category(req.body)
   
    await Categories.save()
    
    res.send(Categories)
})

router.put('/:id',validateBody, async (req, res) => {    
    const Categories = await Category.findByIdAndUpdate(req.params.id, req.body, {new: true})
   
    res.send(Categories)
})

router.delete('/:id', async (req, res) => {
    const Categories = await Category.findByIdAndDelete(req.params.id)

    res.send(Categories)
})

module.exports = router