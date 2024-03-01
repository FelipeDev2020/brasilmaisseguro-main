// eslint-disable-next-line no-unused-vars
import React from "react";
import "./style.css";


import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import Logo from '../../assets/brasil+seguro-logo.png';


import { useState } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';


function Header() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <img src={Logo} alt="Logotipo do Site" width='64' height='64' to={"/"} />
          <Navbar.Brand href="/">&ensp;&ensp;Brasil + Seguro<br></br><small>&ensp;&ensp;Sistema de Monitoramento</small></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" variant="primary" onClick={handleShow} />

          <Navbar.Offcanvas id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="monitoramento">MONITORAMENTO</Nav.Link>
              <Nav.Link href="sobre">QUEM SOMOS</Nav.Link>
              <Nav.Link href="graficos">GRAFICOS</Nav.Link>
              <Nav.Link href="relatar">RELATAR</Nav.Link>

              <Offcanvas show={show} onHide={handleClose}>
                <Offcanvas.Header closeButton>
                  <Offcanvas.Title></Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body className="m-auto">
                  <Nav.Link className="mt-2 text-center" href="home">Home</Nav.Link>
                  <Nav.Link className="mt-2 text-center" href="monitoramento">MONITORAMENTO</Nav.Link>
                  <Nav.Link className="mt-menuLink text-center" href="sobre">QUEM SOMOS</Nav.Link>
                  <Nav.Link className="mt-menuLink text-center" href="graficos">GRAFICOS</Nav.Link>
                  <Nav.Link className="mt-menuLink text-center" href="relatar">RELATAR</Nav.Link>
                </Offcanvas.Body>
              </Offcanvas>
            </Nav>
          </Navbar.Offcanvas>

        </Container>
      </Navbar>


    </>
  )
}

export default Header