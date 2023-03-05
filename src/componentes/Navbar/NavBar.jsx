import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, NavLink } from 'react-router-dom';
import CartWidget from '../CartWidget/CartWidget';



const NavBar = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className=''>
      <Container clasnname=''>
        <NavLink to='/'>Fuezva</NavLink>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <NavLink to='/category/Botines' className='p-2'>Botines</NavLink>
            <NavLink to='/category/Zapatillas' className='p-2'>Zapatillas</NavLink>
          </Nav>
          <Nav>
            <Link to='/cart'>
              <CartWidget />
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;