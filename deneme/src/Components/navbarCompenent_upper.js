import React, { Component } from 'react';
import { NavDropdown, Nav, Container, Form, FormControl } from 'react-bootstrap';
import Navbar from 'react-bootstrap/Navbar'
import Button from 'react-bootstrap/Button'

const navbarCompenent_upper = () => {
    return (
        <div>

            <Navbar bg="dark" variant="dark" >
                <Container>
                    <Navbar.Brand href="http://localhost:3000">Yemek.com</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="#recipes">Yemek Tarifleri</Nav.Link>
                        <Nav.Link href="#fromyou">Sizden Gelenler</Nav.Link>
                        <Nav.Link href="#discover">Keşfet</Nav.Link>
                        <Nav.Link href="#growing">Yetiştir</Nav.Link>
                        <Nav.Link href="#healty">Sağlıklı Yaşa</Nav.Link>

                        <Form className="d-flex" >
                            <FormControl
                                type="default"
                                placeholder="Yemek.com'da Ara"
                                className="me-2"
                                aria-label="Search"
                            />
                        </Form>
                        
                    </Nav>
                </Container>
            </Navbar>


        </div>

    )
}

export default navbarCompenent_upper;