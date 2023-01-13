const Joi = require('joi')
Joi.objectId = require('joi-objectid')(Joi)

const mongoose = require('mongoose');
const {categorySchema} = require('./category');
const validator= require('../middleware/joivalidator')
const createUploader = require("../utils/multer");
const cloudinary = require("../utils/cloudinary");


const productSchema = new mongoose.Schema({
    name: {type: String, required:true} ,
    price: {type: Number, required:true},
    imagen:{type: String, required:true},
    category:{type: categorySchema, required:true},
    cloudinaryId: {type: String,required: true},
})
const Product = mongoose.model('Product', productSchema)

const removeImage = (cloudinaryId) => {
  return cloudinary.uploader.destroy(cloudinaryId, { invalidate: true });
};
    const reqschema = Joi.object({
      name: Joi.string().required().messages({"any.required":`El campo NAME es requerido`}),
      price: Joi.number().required(),
      categoryId: Joi.objectId().required().messages({"any.required":`El campo CategoryId es requerido`,'object.base':`El campo "categoryId" debe se un objectId valido para mongo`}),
      file: Joi.object().required().messages({"any.required": `El campo "imagen" es requerido`,}),
    })
    const VALID_IMAGE_TYPES = {
      "image/jpg": "jpg",
      "image/jpeg": "jpeg",
      "image/png": "png",
    };
    
    const imageValidator = (mimetype) => VALID_IMAGE_TYPES[mimetype];
    
   
  exports.Product=Product
  exports.productSchema = productSchema
  exports.validateBody = validator(reqschema)
  exports.upload = createUploader(imageValidator);
  exports.removeImage = removeImage;