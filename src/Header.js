import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">Navbar</Navbar.Brand>
        <Nav className="me-auto nav-bar-wrapper">
          <Link to="/add">Add Product</Link>
          <Link to="/edit">Edit Product</Link>
          <Link to="/login">login</Link>
          <Link to="/register">Register</Link>
        </Nav>
      </Navbar>
    </div>
  );
}
