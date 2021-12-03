import React from 'react'
import {Nav,Navbar,NavDropdown,Container} from 'react-bootstrap'
import {Link} from 'react-router-dom'
export default function Header() {
    return (
        <div>
            <Navbar bg="dark" variant={"dark"} expand="lg">
  <Container>
    <Navbar.Brand href="#home">TourBazaar</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="ms-auto">
        <Nav.Link as={Link} to="/">Home</Nav.Link>
        <Nav.Link as={Link} to="/about_page">About</Nav.Link>
        <Nav.Link as={Link} to="/places_page">Places</Nav.Link>
        <Nav.Link as={Link} to="/contact_page">Contact</Nav.Link>
        <NavDropdown title="Welcome!" id="basic-nav-dropdown">
          <NavDropdown.Item as={Link} to="/login_page">Login</NavDropdown.Item>
          <NavDropdown.Item as={Link} to="/registation_page">Registation</NavDropdown.Item>
          
          
          
        </NavDropdown>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
        </div>
    )
}

