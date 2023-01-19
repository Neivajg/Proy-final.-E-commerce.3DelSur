import { NavLink, Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useState, useContext} from "react";
import Login from "./Login";
import ContextoLogin from '../contextlogin';
import Badge from 'react-bootstrap/Badge';
import ContextoCarrito from '../context';



export default function NavBar() {
  const [login,setLogin]=useContext(ContextoLogin)

  const [show, setShow] = useState(false);
  const [items,SetItems]=useContext(ContextoCarrito)

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleLogut=()=> setLogin(false)
  
  

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

        {!login
          ? <NavLink className="nav-link" style={{marginLeft:900}} onClick={handleShow}>Login</NavLink>
          : <NavLink onClick={handleLogut}  className="nav-link" style={{marginLeft:900}} >Logout</NavLink>
        }
        {!login
          ? <NavLink className="nav-link" to={`/registro`}>Registrarse</NavLink>
          : null
        }
        {!login
          ?<Login handleShow={handleShow} handleClose={handleClose} show={show}/> 
         : null
        }
        
          <NavLink className="nav-link"  to={`/carrito`} >
          carrito<Badge bg="secondary">{items.length}</Badge>
          </NavLink>
          </Nav>
        </Container>
      </Navbar>
    </>
    );
}