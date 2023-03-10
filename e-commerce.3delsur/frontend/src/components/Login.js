import { useContext, useState } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
import ContextoLogin from '../contextlogin';

const Login=({handleShow,show,handleClose}) =>{
 
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  
  const [login,setLogin]=useContext(ContextoLogin)


 const handlerButton=(event)=>{
   event.preventDefault()
    fetch("http://localhost:5000/auths/login", { method: 'POST', body: JSON.stringify({email:email,password:password}),  mode: 'cors', headers: {
      'Content-Type': 'application/json'
    }, })
      .then((response) => {
        if(response.status === 200){
          const token = response.headers.get('x-auth-token')

          localStorage.setItem('token', token)
          setLogin(true)
          return handleClose()
           
        }

        alert("Usuario No registrado :/")
        
      
      })
   
  }

  return (
    <>
      <Offcanvas show={show} placement="end" onHide={handleClose} >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>LOGIN</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
        <div style={{marginTop:70}}>
          <form  onSubmit={handlerButton} action={'/'} style={{display:"flex", flexDirection: "column",boxShadow:"0px 0px 5px 1px black",padding:20,alignItems:"center",width:350,height:350,marginTop:10}}>
              <label style={{ marginTop:30, color:"blanck"}}>Complete su registro:</label>
                <label value={email} onChange={(e) => setEmail(e.target.value)}  style={{color:"black",marginLeft:40,marginTop:30}}>
                  Email:
                  <input type="text" placeholder="Email.." style={{width:150,height:30,marginTop:20,marginLeft:40}} />
                </label>
                <label value={password} onChange={(e)=>setPassword(e.target.value)}  style={{color:"black",marginLeft:40}}>
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


