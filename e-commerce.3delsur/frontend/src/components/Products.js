import { useState, useEffect } from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


const Products =()=>{
    
    const [contador,SetContador]=useState(0);

    const suma =()=>SetContador(contador +1);
    const resta=()=>SetContador(contador -1);
    useEffect(() => {
      fetch("http://localhost:5000/products", {method: 'GET'})
          .then((response) => response.json())
          .then((res) => console.log(res[2]))//me llegala bbdd para utilizar aun sin desplegar
  }, []);

    return (
    <>
        <h1 style={{marginLeft:570, marginTop:20}}>Productos</h1>
    <Card style={{ width: '18rem',marginLeft:50 }}>
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