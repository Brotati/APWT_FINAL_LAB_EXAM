import React from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";

export default function Header() {
  const user = JSON.parse(localStorage.getItem("user-info"));
  const history = useHistory();

  function logout() {
    localStorage.clear();
    history.push("/register");
  }
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">Navbar</Navbar.Brand>
        <Nav className="me-auto nav-bar-wrapper">
          {localStorage.getItem("user-info") ? (
            <>
              <Link to="/ProductList">Product List</Link>
              <Link to="/add">Add Product</Link>
              <Link to="/update">Update Product</Link>
              <Link to="/search">Search Product</Link>
              
              
            </>
          ) : (
            <>
              <Link to="/login">Login</Link>
              <Link to="/register">Register</Link>
            </>
          )}
        </Nav>
        {localStorage.getItem("user-info") ? 
          <Nav>
            <NavDropdown title={user && user.name}>
              <NavDropdown.Item>Profile</NavDropdown.Item>
              <NavDropdown.Item onClick={logout}>Logout</NavDropdown.Item>
            </NavDropdown>
          </Nav>
         : null}
      </Navbar>
    </div>
  );
}
