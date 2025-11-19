import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function CustomNavbar() {
  return (
    <Navbar bg="primary" variant="dark" expand="lg" fixed="top">
      <Container>
        <Navbar.Brand as={Link} to="/p182">UW Habitat for Humanity</Navbar.Brand>
        <Navbar.Toggle aria-controls="main-navbar-nav" />
        <Navbar.Collapse id="main-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/p182/who-we-are">Who We Are</Nav.Link>
            <Nav.Link as={Link} to="/p182/get-involved">Get Involved</Nav.Link>
            <Nav.Link as={Link} to="/p182/affiliates">Affiliates</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}