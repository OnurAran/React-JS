import React, { Component } from 'react';
import { NavDropdown, Nav, Container } from 'react-bootstrap';
import Navbar from 'react-bootstrap/Navbar'
import "./navbar_lower.css";

class navbarCompenent_lower extends Component {
    render() {
        return (
            <div>
                <Navbar bg="dark" variant="light" className="lower" fixed = "bottom">
                    <Container>
                    <Navbar.Brand >İletişim</Navbar.Brand>
                        <Nav className="me-auto">
                        
                            
                            <Nav.Link href="https://www.instagram.com/rn.onur/">İnstagram</Nav.Link>
                            <Nav.Link href="#facebook">Facebook</Nav.Link>
                            <Nav.Link href="#whatsapp">Whatsapp</Nav.Link>
                            <Nav.Link href="#email">E-Mail</Nav.Link>
                        </Nav>
                    </Container>
                </Navbar>
            </div>
        );
    }
}

export default navbarCompenent_lower;