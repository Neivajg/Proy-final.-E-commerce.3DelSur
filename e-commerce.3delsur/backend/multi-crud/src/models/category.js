const mongoose= require('mongoose');
const Joi = require('joi')
const validator= require('../middleware/joivalidator')

const categorySchema = new mongoose.Schema({
    name: {type: String, required:true} 
})
const Category = mongoose.model('Category', categorySchema)

    const reqschema = Joi.object({
      name: Joi.string().required().messages({"any.required":`El  NAME es requerido`}),
    })

   
  exports.Category = Category
  exports.categorySchema = categorySchema
  exports.validateBody = validator(reqschema)
