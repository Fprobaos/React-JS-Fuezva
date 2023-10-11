import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";

import { NavbarBrand } from "react-bootstrap";

const NavBar = () => {
  return (
    <Navbar
      collapseOnSelect
      style={{
        display: "flex",
        height: "90px",
        backgroundColor: "#0B4F6C",
      }}
      className="col-12 "
    >
      <Container>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <NavbarBrand href="/" style={{ color: "#A5FFD6", fontSize: "35px" }}>
          Brand or Logo
        </NavbarBrand>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto d-flex">
            <NavLink
              to="/category/Botines"
              className="p-2"
              style={{ color: "#A5FFD6", fontSize: "20px" }}
            >
              Portfolio
            </NavLink>
            <NavLink
              to=""
              className="p-2"
              style={{ color: "#A5FFD6", fontSize: "20px" }}
            >
              My Business
            </NavLink>
            <NavLink
              to=""
              className="p-2"
              style={{ color: "#A5FFD6", fontSize: "20px" }}
            >
              Contact Me!
            </NavLink>
            <NavLink
              to=""
              className="p-2"
              style={{ color: "#A5FFD6", fontSize: "25px" }}
            >
              + 1 3541234567
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
