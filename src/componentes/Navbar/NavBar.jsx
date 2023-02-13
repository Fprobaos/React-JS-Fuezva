import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const NavBar = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">Fuezva</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#features">Remeras</Nav.Link>
            <Nav.Link href="#pricing">Zapatillas</Nav.Link>
            <NavDropdown title="Pantalones" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Straight</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Skinny
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Carrot</NavDropdown.Item>
              <NavDropdown.Divider />
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link eventKey={2} href="#memes">
              Tu bolsa 
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;