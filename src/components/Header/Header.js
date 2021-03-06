import React from 'react';
import {
  Container,
  Nav,
  Navbar
} from "react-bootstrap";
import { Link } from 'react-router-dom';
import useAuth from '../Hooks/useAuth';
import logo from "../../images/logo1.png";
import "./Header.css";



const Header = () => {
    
    const {user , logOut}= useAuth()

    return (
      <Navbar
        className="py-4 header-bg"
        collapseOnSelect
        expand="lg"
        variant="dark"
      >
        <Container>
          <Navbar.Brand
            className="py-0"
            as={Link}
            to="/"
            style={{ fontSize: "1.5rem", fontWeight: "bold" }}
          >
            <img src={logo} className="" alt="logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse className="justify-content-end" id="responsive-navbar-nav">
            <Nav>
              <Nav.Link as={Link} to="/" style={{ fontWeight: "500" }}>
                Home
              </Nav.Link>
              

              {user.email ? (
                <>
                <Nav.Link as={Link} to="/myorders" style={{ fontWeight: "500" }}>
                  My Orders
                </Nav.Link>
                <Nav.Link as={Link} to="/manageallorders" style={{ fontWeight: "500" }}>
                  Manage All Orders
                </Nav.Link>
                <Nav.Link as={Link} to="/addnewservice" style={{ fontWeight: "500" }}>
                  Add New Service
                </Nav.Link>
                <Nav.Link onClick={logOut}> Sign Out</Nav.Link>
                </>
              ) : (  
                <Nav.Link as={Link} to="/login" style={{ fontWeight: "500" }}>
                  Log In
                </Nav.Link>
              )}
              <Nav.Link>{user?.displayName}</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
   
};

export default Header;