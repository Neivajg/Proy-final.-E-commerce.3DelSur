import React, { useState, useEffect } from "react";

const style= {backgroundColor:"#333", color:"white",  position:"fixed",left:0,bottom:0, width:"100%"};


function Reloj({hora}) {
  return <h4>{hora}</h4>
}
const Footer = () => {
  const [hora, setHora] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
      setHora(new Date().toLocaleTimeString());
  })
  return (
    <div style={{display:"flex", marginLeft:1300}}>
   <h4 style={{color:"pink"}}><Reloj hora={hora}/></h4>
   <img src="./inst.jpg" alt="QR Instagram" style={{height:100,width:100}}/>
   </div>
   )
  };

export default Footer;
