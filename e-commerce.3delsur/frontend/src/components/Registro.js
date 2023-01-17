import { useState } from "react"

const Registro =()=>{

  const [name, SetName]=useState("");
  const [email,SetEmail]=useState("")
  const [password,setPassword]=useState("")
  console.log(name,"estado NAME")
    console.log(email,"estado EMAIL")
    console.log(password,"estado PASSWORD")

    return (
<>
    <div style={{marginTop:70}}>
   
    <form   style={{display:"flex", flexDirection: "column",marginBottom:150,marginLeft:500,boxShadow:"0px 0px 5px 1px black",padding:20,alignItems:"center",width:450,height:350,marginTop:20}}>
       <label style={{ marginTop:20, color:"blanck"}}>Complete su registro:</label>

          <label  value={name} onChange={(e)=>{SetName(e.target.value)}} for style={{color:"black",marginLeft:40,marginTop:20}}>
            Name:
            <input type="text" placeholder="Name.." style={{width:150,height:30,marginTop:10,marginLeft:40}} />
          </label>

          <label value={email} onChange={(e)=>{SetEmail(e.target.value)}} for style={{color:"black",marginLeft:40}}>
            Email:
            <input type="text" placeholder="Email.." style={{width:150,height:30,marginTop:20,marginLeft:40}} />
          </label>

          <label value={password} onChange={(e)=>{setPassword(e.target.value)}} for style={{color:"black",marginLeft:40}}>
            Password:
            <input type="text" placeholder="Password.." style={{width:150,height:30,marginTop:20,marginLeft:10}} />
          </label>

          <button style={{marginTop:20}}>Registro</button>
          </form>
    </div>
    </>
    )
} 
export default Registro