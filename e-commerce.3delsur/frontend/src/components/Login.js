import React, { useState } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';

const Login=({handleShow, show}) =>{

  return (
    <>
      <Offcanvas show={show} placement="end" onHide={handleShow} >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Offcanvas</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          Some text as placeholder. In real life you can have the elements you
          have chosen. Like, text, images, lists, etc.
        </Offcanvas.Body>
      </Offcanvas>
    </>

  );
}
    
export default Login


