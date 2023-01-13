
const Registro =()=>{
    return (
<>
    <div style={{marginTop:70}}>
   
    <form  style={{display:"flex", flexDirection: "column",marginLeft:500,boxShadow:"0px 0px 5px 1px black",background:"#848484",padding:20,width:650,height:550,marginTop:20}}>
       <label style={{ marginTop:20, color:"blanck", marginLeft:200}}>Complete su registro:</label>
          <label for style={{color:"black",marginLeft:40,marginTop:20}}>
            Name:
            <input type="text" placeholder="Name.." style={{width:150,height:30,marginTop:10,marginLeft:40}} />
          </label>
          <label for  style={{color:"black",marginLeft:40}}>
            Email:
            <input type="text" placeholder="Email.." style={{width:150,height:30,marginTop:20,marginLeft:40}} />
          </label>
          <label for  style={{color:"black",marginLeft:40}}>
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