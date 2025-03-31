// import React from "react";
import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, NavbarBrand, NavItem, NavLink, Nav } from "reactstrap";

const Header = (props) => {
  return (
    <div>
      <Navbar className="my-2" color="dark" dark style={{ marginTop: "0" }}>
        <NavbarBrand href="/">{props.title}</NavbarBrand>
        <Nav className="me-auto" navbar />
        <NavItem>
          <NavLink
            href="/components/"
            style={{ color: "white", marginRight: "2rem" }}
          >
            Components
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            href="https://github.com/reactstrap/reactstrap"
            style={{ color: "white" }}
          >
            GitHub
          </NavLink>
        </NavItem>
      </Navbar>
    </div>
  );
};

export default Header;
