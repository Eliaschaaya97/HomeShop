import React from "react";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Container, Nav, Navbar as NavbarBs } from "react-bootstrap";
import { NavLink } from "react-router-dom";

import "./custom.css"; // Import your custom CSS file

export function Navbar1() {
 

  return (
    <NavbarBs className="bg-dark -sm mb-3 navbar-custom">
      <Container>
        {/* UNI Shop brand link */}
        <NavbarBs.Brand as={NavLink} to="/" className="text-white">
          UNI Shop
        </NavbarBs.Brand>

\
          
        
    
      </Container>
    </NavbarBs>
  );
}
