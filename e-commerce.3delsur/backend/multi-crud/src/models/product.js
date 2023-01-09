const mongoose= require('mongoose');
const Joi = require('joi')
Joi.objectId = require('joi-objectid')(Joi)

const {categorySchema} =('./product')
const validator= require('../middleware/joivalidator')


const productSchema = new mongoose.Schema({
    name: {type: String, required:true} ,
    price: {type: Number, required:true},
    imagen:{type: String, required:true},
    category:{type: categorySchema, required:true}
})
const Product = mongoose.model('Product', productSchema)

    const reqschema = Joi.object({
      name: Joi.string().required().messages({"any.required":`El campo NAME es requerido`}),
      price: Joi.number().required(),
      imagen: Joi.string().required(),
      categoryId: Joi.objectId().required()
    })

   
  exports.Product=Product
  exports.productSchema = productSchema
  exports.validateBody = validator(reqschema)