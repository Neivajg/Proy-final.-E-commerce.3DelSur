import { NavLink, Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useState } from "react";
import Login from "./Login";



export default function NavBar() {
  const [login,setLogin]= useState(false);
  const [show, setShow] = useState(false);

  const handleShow = () => {
    if (show){
      setShow(false)
    } else {
      setShow(true)
    }
  }

  return (

     <>
      <Navbar bg="dark" variant="dark" style={{display :"flex"}}>
        <Container fluid >
       
        <Link className="navbar-brand" to="/">
        3DelSur
        </Link>
    
        <Nav className="me-auto">

        <NavLink className="nav-link" to="/">
           Home
          </NavLink>         
        <NavLink className="nav-link" to={`/Products`}>
          Productos
          </NavLink>
        <NavLink className="nav-link" to={`/contact`}>
          Contacto
          </NavLink>
          <input
              type="checkbox"
              label="True/False"
              value={login}
              onClick={(e) => setLogin(e.target.checked)}
              style={{color: 'white'}}
            />
          {!login
          ? <NavLink className="nav-link" style={{marginLeft:900}} onClick={handleShow}>Login</NavLink>   
          : <NavLink className="nav-link" style={{marginLeft:900}} >Logout</NavLink>
        }
        {!login
          ? <NavLink className="nav-link" to={`/registro`}>Registrarse</NavLink>
          : null
        }
        {!show
        ? null : <Login handleShow={handleShow} show={show}/>
        }
        
          <NavLink className="nav-link"  to={`/carrito`} >
          carrito
          </NavLink>
          </Nav>
        </Container>
      </Navbar>
    </>
    );
}