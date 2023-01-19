import { useState, useEffect, useContext } from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ContextoCarrito from '../context';


const Products = () => {
  
  const [prodCarrito,SetProdCarrito]=useContext(ContextoCarrito)
  const [productos, SetProductos] = useState([])
  
  const handlercarrito=(e)=>{

    const elemt = prodCarrito.find((items)=> items._id == e._id)
      if(!elemt){
            e.count = 1
            const productosCarrito=  [...prodCarrito,e]

            SetProdCarrito(productosCarrito)
      }else{
            elemt.count= elemt.count +1

            const arraySinElemento= prodCarrito.filter(elemt=>elemt._id !== e._id )
            const carritoConElemtActualizado=  [...arraySinElemento,elemt]

            SetProdCarrito(carritoConElemtActualizado)
          }
  }

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
      <Card key={e._id} style={{ width: '18rem', marginLeft: 50,boxShadow:"0px 0px 5px 1px black",padding:20,alignItems:"center",marginTop:30}}>
        <Card.Img src={e.imagen} style={{width:250 , height:300}} />
        <Card.Body>
          <Card.Title>{e.name}</Card.Title>
          <Card.Text>
            Precio producto:{e.price}€
          </Card.Text>
          <Button variant="primary" onClick={()=>handlercarrito(e)}>Añadir al carrito</Button>
        </Card.Body>
      </Card>

))}
      </div>


    </>
  );
}
export default Products;