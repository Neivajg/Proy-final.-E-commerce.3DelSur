import { useState } from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Products =()=>{
    
    const [contador,SetContador]=useState(0);

    const suma =()=>SetContador(contador +1);
    const resta=()=>SetContador(contador -1);


    return (
    <>
        <h1>Productos</h1>
        <p>Catalogo de productos por categorias</p>
    <Card style={{ width: '18rem' }}>
      <Card.Img  src="/img.jpg" />
      <Card.Body>
        <Card.Title>Nombre producto</Card.Title>
        <Card.Text>
         Descripcion producto
        </Card.Text>
        <Button variant="primary" onClick={resta}>-</Button> 
        <Button variant="primary" onClick={suma}>+</Button>
        <h4>valor:{contador}</h4>
        <Button variant="primary" onClick={suma}>Añadir al carrito</Button>
      </Card.Body>
    </Card>

    </>
    );
}
export default Products;