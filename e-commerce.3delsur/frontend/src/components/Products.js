import { useState, useEffect } from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


const Products = () => {

  const [contador, SetContador] = useState(0);
  const [productos, SetProductos] = useState([])
  console.log(productos)
  const suma = () => SetContador(contador + 1);
  const resta = () => SetContador(contador - 1);
  useEffect(() => {
    fetch("http://localhost:5000/products", { method: 'GET' })
      .then((response) => response.json())
      .then((res) => {
        console.log("vamos", res)
        SetProductos(res)
      })

  }, []);

  if (!productos) return null
  
  return (
    <>
      <h1 style={{ marginLeft: 570, marginTop: 20 }}>Productos</h1>
  
  <div style={{display:"grid",gridTemplateColumns:"repeat(4, 1fr)", gap:20, marginInline:30}}>
    {productos.map((e, index)=> (
      <Card key={index} style={{ width: '18rem', marginLeft: 50,boxShadow:"0px 0px 5px 1px black",padding:20,alignItems:"center",marginTop:30}}>
        <Card.Img src={e.imagen}/>
        <Card.Body>
          <Card.Title>{e.name}</Card.Title>
          <Card.Text>
            Precio producto:{e.price}€
          </Card.Text>
          <Button variant="primary" onClick={resta}>-</Button>
          <Button variant="primary" onClick={suma}>+</Button>
          <h4>valor:{contador}</h4>
          <Button variant="primary" onClick={suma}>Añadir al carrito</Button>
        </Card.Body>
      </Card>

))}
      </div>


    </>
  );
}
export default Products;