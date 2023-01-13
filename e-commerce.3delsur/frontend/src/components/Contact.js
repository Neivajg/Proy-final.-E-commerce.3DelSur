import { MapContainer, TileLayer } from 'react-leaflet'
import { Marker } from 'react-leaflet/Marker'



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
       <div style={{display:"grid",gridTemplateColumns:"repeat(2, 1fr)"}}>
          <div style={{border:"1px solid black"}}>
          <p>Ubicación:</p>
          <MapContainer style={{height:300,witdh:300}} center={[51.505, -0.09]} zoom={1} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />  
          <Marker position={[36.020076, -5.608353]}>
          </Marker>
      </MapContainer>
    
          </div>
        <div style={{border:"1px solid black"}}>
          Para más información :
        <p>Número Telefono: +34 669852145</p>
         <img src="./instagram.jpg" alt="QR Instagram" style={{height:500,width:550}}></img>
        </div>
        </div>
    </div>
    </>
    )
}
export default Contact;