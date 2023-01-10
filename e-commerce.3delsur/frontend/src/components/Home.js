import React, { useState, useEffect } from "react";


function Reloj({hora}) {
    return <h4>{hora}</h4>
}

const Home = ()=>{

    const [hora, setHora] = useState(new Date().toLocaleTimeString());

    useEffect(() => {
        setHora(new Date().toLocaleTimeString());
    })
              
    return (
    <div> 
      <h3 style={{display:"flex", flexDirection: "column",marginLeft:550,padding:20,alignItems:"center",width:450,height:50,marginTop:20}}>Bienvenidos a 3DelSur</h3>     
       
       <img style={{display:"flex", flexDirection: "column",marginLeft:500,boxShadow:"0px 0px 5px 1px black",padding:20,alignItems:"center",width:550,height:450,marginTop:30}} src="./img.jpg" ></img>
      
       <p style={{display:"flex", flexDirection: "column",marginLeft:550,padding:20,alignItems:"center",width:450,height:50,marginTop:20}}>
       Un mundo de diseño te Espera en 3DelSur.
          </p>
       
        <h4 style={{color:"pink"}}><Reloj hora={hora}/></h4>
    </div>
   
    )
}
export default Home;