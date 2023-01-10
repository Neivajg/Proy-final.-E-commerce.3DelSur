require('express-async-errors')

const errors = require('../middleware/errors')
const categories = require('../routes/categories')
const products = require('../routes/products')
const users = require('../routes/users')
const auths = require("../routes/auths");

const helmet = require("helmet");
const compression = require('compression')
const express = require('express')

module.exports = function (app) {
    app.use(helmet()); // Capa de seguridad sobre el servidor (seguridad)
    app.use(compression()) // comprime las respuestas del servidor en gzip (Seguridad y performance)
   
    app.use(express.json())

    app.use('/categories', categories)
    app.use('/products', products)
    app.use('/users', users)
    app.use("/auths", auths);

    app.get('/ping', (req, res) => {
        res.send('pong')
    })
    
    app.use(errors)
}