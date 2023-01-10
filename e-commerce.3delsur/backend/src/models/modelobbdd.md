//colección Category
const category={
    name: {type: String, required:true} 
}

//colección Productos
const productSchema={
    name: {type: String, required:true} ,
    price: {type: Number, required:true},
    imagen:{type: String, required:true},
    category:{type: categorySchema, required:true}
}

//colección User

const User = {
    _id: objectId()
    password:{type: String, required:true}
    email:{type: String, required:true}
}

//transacciones