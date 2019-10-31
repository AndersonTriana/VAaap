import React from 'react';
import LoginForm from './login';
import Logo from '../assets/images/Logo.png';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';





function Toolbar() {

    return( 
      <Navbar variant="dark" bg="dark" expand="lg">
        <Navbar.Brand href="#home" className="offset-1">
          <img
            src={Logo}
            width="75"
            height="45"
            className="d-inline-block align-top"
            alt="VAapp logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#home">Inventario</Nav.Link>
            <Nav.Link href="#vendorList">Vendedores</Nav.Link>
            <NavDropdown bg="dark" title="Herramientas" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/CreateRegisterCode">Generar código de registro</NavDropdown.Item>
              <NavDropdown.Item href="#action/Chat">Chat</NavDropdown.Item>
              <NavDropdown.Item href="#action/Graphics">Gráficos</NavDropdown.Item>
            </NavDropdown>
            
          </Nav>

          <Nav>
            <LoginForm />
          </Nav>
          <div className="col-md-2"/>
        </Navbar.Collapse>

      </Navbar>
    );
}

export default Toolbar;