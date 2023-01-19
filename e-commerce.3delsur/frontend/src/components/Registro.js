import { useState } from "react"

const Registro =()=>{

  const [name, SetName]=useState("");
  const [email,SetEmail]=useState("")
  const [password,setPassword]=useState("")

    const handlerButton=(event)=>{
      event.preventDefault()
      fetch("http://localhost:5000/users/registro", { method: 'POST', body: JSON.stringify({name:name,email:email,password:password}),   headers: {
        'Content-Type': 'application/json'
      } })
        .then((response) => {
           if(response.status == 200){
            const token = response.headers.get('x-auth-token')
            localStorage.setItem('token', token)
            //sessionStorage.setItem("usuarioregistrado",true)
            window.location ="/" 
            return alert("Usuario Registrado Correctamente") 
           
          }
          
          alert("Usuario No registrado :/")
        })
       
      }

    return (
    <>
      <div style={{marginTop:70}}>
    
      <form  onSubmit={handlerButton}  style={{display:"flex", flexDirection: "column",marginBottom:150,marginLeft:500,boxShadow:"0px 0px 5px 1px black",padding:20,alignItems:"center",width:450,height:350,marginTop:20}}>
        <label style={{ marginTop:20, color:"blanck"}}>Complete su registro:</label>

            <label  value={name} onChange={(e)=>{SetName(e.target.value)}} style={{color:"black",marginLeft:40,marginTop:20}}>
              Name:
              <input type="text" placeholder="Name.." style={{width:150,height:30,marginTop:10,marginLeft:40}} />
            </label>

            <label value={email} onChange={(e)=>{SetEmail(e.target.value)}} style={{color:"black",marginLeft:40}}>
              Email:
              <input type="text" placeholder="Email.." style={{width:150,height:30,marginTop:20,marginLeft:40}} />
            </label>

            <label value={password} onChange={(e)=>{setPassword(e.target.value)}} style={{color:"black",marginLeft:40}}>
              Password:
              <input type="text" placeholder="Password.." style={{width:150,height:30,marginTop:20,marginLeft:10}} />
            </label>

            <button type="submit" style={{marginTop:20}}>Registro</button>
            </form>
      </div>
    </>
    )
} 
export default Registro