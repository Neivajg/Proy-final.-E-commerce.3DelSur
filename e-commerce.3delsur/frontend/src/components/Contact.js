import { MapContainer, TileLayer,Popup } from 'react-leaflet'
import { Marker } from 'react-leaflet/Marker'



const Contact =()=>{
    return (
<>
  <h4 style={{marginLeft:570, marginTop:20}}>Formulario Clientes:</h4>
  <form  style={{display:"flex", flexDirection: "column",marginLeft:500,boxShadow:"0px 0px 5px 1px black",padding:20,alignItems:"center",width:450,height:350,marginTop:20}}>
    <label>
      Name:
      <input type="text" placeholder="Name.." style={{width:150,height:30,marginTop:10}} />
    </label>
    <label>
      Email:
      <input type="text" placeholder="Email.." style={{width:150,height:30,marginTop:20}} />
    </label>
    <label style={{marginTop:20}}>
      En que podemos ayudarte:
    </label>
    <textarea placeholder="Máximo 300 Caracteres.." maxLength={300} type="text" style={{marginTop:20, height:70,width:250}} />
    <button type="submit" style={{  height:40,width:50, borderRadius:5,marginTop:20}}>Send</button>
  </form>
  <div style={{display:"flex",marginTop:100,marginLeft:50}}>
  <div>
      Para más información :
      <p>Podeís visitar nuestra tienda ó llamar a </p>
      <p>nuestro número Telefono: +34 669852145</p>
     
    </div>
    <div style={{boxShadow:"0px 0px 5px 1px black",marginLeft:50,marginBottom:30}}>
        <MapContainer style={{width:250, height:250}}center={[35.75, 4.25]} zoom={3.5} scrollWheelZoom={true}>
        <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
      
            <Marker position={[36.020076,-5.608353]}>
              <Popup>
               <p>Aquí podras Encontrarnos! ^^</p>
              </Popup>
            </Marker>
   
    </MapContainer>
    </div>
    
  </div>
</>
    )
}
export default Contact;