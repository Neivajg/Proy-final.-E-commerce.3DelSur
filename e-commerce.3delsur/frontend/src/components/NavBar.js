import { NavLink, Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export default function NavBar() {

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
          <NavLink className="nav-link" style={{marginLeft:900}} >
          Login
          </NavLink>
          <NavLink className="nav-link" >
          Registrarse
          </NavLink>
         
          <NavLink className="nav-link"  >
          carrito
          </NavLink>
          </Nav>
        </Container>
      </Navbar>
    </>
    );
}