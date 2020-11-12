import React from "react"
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav'

export default function PortNavbar() {
    return (
        <Navbar bg="light" expand="lg">
            <Navbar.Brand href="#home">Mike Fallesen</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link to="/about">About</Nav.Link>
                    <Nav.Link to="/portfolio">Portfolio</Nav.Link>
                    <Nav.Link to="/contact">Contact</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}
