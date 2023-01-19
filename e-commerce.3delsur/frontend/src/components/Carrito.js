import { useEffect, useState, useContext } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import ContextoCarrito from '../context';




const Carrito =()=>{

  const [items,SetItems]=useContext(ContextoCarrito)


  const suma = (e) => {

    const elemt = items.find((items)=> items._id == e._id)

          const index= items.indexOf(elemt)
           console.log(index)
          elemt.count= elemt.count +1
         
          const incrementoProducto= [...(items.slice(0, index)), elemt,...(items.slice(index+1))]
      
          SetItems(incrementoProducto)
 
  };

  const resta = (e) =>{
    const elemt = items.find((items)=> items._id == e._id)

    if (elemt.count <= 0) {
    elemt.count ++
  }  
    const index= items.indexOf(elemt)
      console.log(index)
    elemt.count= elemt.count -1

   const decrementoProducto= [...(items.slice(0, index)), elemt,...(items.slice(index+1))]

   SetItems(decrementoProducto)

  };


  const handlerVaciarCarrito = () => {
    SetItems([])
   
   
  };

  if (!items) return null


    return(
     <>
       <div style={{display:"grid",gridTemplateColumns:"repeat(2, 1fr)", gap:20, marginInline:30}}>
     {items.map((e, index)=> (
      <Card key={e._id} style={{ width: '18rem', marginLeft: 50,boxShadow:"0px 0px 5px 1px black",padding:20,alignItems:"center",marginTop:30}}>
        <Card.Img src={e.imagen} style={{width:250 , height:300}} />
        <Card.Body>
          <Card.Title>{e.name}</Card.Title>
          <Card.Text>
            Precio producto:{e.price}€
             total productos: {e.count}
          </Card.Text>
          <Button variant="primary" style={{background:"white",color:"black",borderColor:"black"}} onClick={()=>resta(e)} >-</Button>
          <Button variant="primary" style={{background:"white",marginLeft:2,color:"black",borderColor:"black"}} onClick={()=>suma(e)}>+</Button>
        </Card.Body>
      </Card>
   
   ))}
         <Button variant="primary"  onClick={handlerVaciarCarrito}>Vaciar carrito</Button>

   </div>
      </>
    )
}  
export default Carrito