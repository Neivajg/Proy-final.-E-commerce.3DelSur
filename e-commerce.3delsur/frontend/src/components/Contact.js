import { Container } from "react-bootstrap";

const Contact =()=>{
    return (
    <>
    <div >
       <h4 style={{marginLeft:570, marginTop:20}}>Formulario Clientes:</h4>

       <form  style={{display:"flex", flexDirection: "column",marginLeft:500,boxShadow:"0px 0px 5px 1px blac",background:"#848484",padding:20,alignItems:"center",width:450,height:350,marginTop:20}}>
          <label for>
            Name:
            <input type="text" placeholder="Name.." style={{width:150,height:30,marginTop:10}} />
          </label>
          <label for>
            Email:
            <input type="text" placeholder="Email.." style={{width:150,height:30,marginTop:20}} />
          </label>
          <label style={{marginTop:20}} for>
            En que podemos ayudarte:
          </label>
          <textarea placeholder="Máximo 300 Caracteres.." maxLength={300} type="text" style={{marginTop:20, height:70,width:250}} />
          <button type="submit" style={{  height:40,width:50, borderRadius:5,marginTop:20}}>Send</button>
        </form>
       
        <p>Ubicación:</p>
        <div>
            <hr/>
           Meter ubicacion con lieftet
           <hr/>
        </div>
        <p>Número Telefono: +34 669852145</p>
        <p>Instagram:@3DelSur</p>
    </div>
    </>
    )
}
export default Contact;