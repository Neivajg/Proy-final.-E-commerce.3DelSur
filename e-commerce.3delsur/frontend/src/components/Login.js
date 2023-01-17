import { useState } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';

const Login=({handleShow, show}) =>{
 
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  console.log(email)


 const handlerButton=(event)=>{
  event.preventDefault()
  console.log(email)
    fetch("http://localhost:5000/auths/login", { method: 'POST', body: JSON.stringify({email:email,password:password}),   headers: {
      'Content-Type': 'application/json'
    }, })
      .then((response) => response.json())
      .then((res) => { if(res.response == true){
        alert("login correcto")
        sessionStorage.setItem("usuariologueado",true)
      }else{
        alert("Usuario No registrado :/")
      }
        console.log( res)
      })
  }

  return (
    <>
      <Offcanvas show={show} placement="end" onHide={handleShow} >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>LOGIN</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
        <div style={{marginTop:70}}>
          <form onSubmit={handlerButton}  style={{display:"flex", flexDirection: "column",boxShadow:"0px 0px 5px 1px black",padding:20,alignItems:"center",width:350,height:350,marginTop:10}}>
              <label style={{ marginTop:30, color:"blanck"}}>Complete su registro:</label>
                <label value={email} onChange={(e) => setEmail(e.target.value)} for  style={{color:"black",marginLeft:40,marginTop:30}}>
                  Email:
                  <input type="text" placeholder="Email.." style={{width:150,height:30,marginTop:20,marginLeft:40}} />
                </label>
                <label value={password} onChange={(e)=>setPassword(e.target.value)} for  style={{color:"black",marginLeft:40}}>
                  Password:
                  <input type="text" placeholder="Password.." style={{width:150,height:30,marginTop:20,marginLeft:10}} />
                </label>
                <button type='submit' style={{marginTop:20}}>Login</button>
                </form>
          </div>
  
        </Offcanvas.Body>
      </Offcanvas>
    </>

  );
}
    
export default Login


