'use client';
import React from 'react';
import { Navbar, Nav, Form, Button, Col, Row } from 'react-bootstrap';
import styles from './NavBar.module.scss';

const NavBar = () => {
  return (
    <Navbar
      bg="primary"
      data-bs-theme="dark"
      className={styles.navbarBody}
    >
      <Navbar.Brand href="#home">Weather App</Navbar.Brand>
      <Nav>
        <Row>
          <Col xs="auto">
            <Form.Control
              type="text"
              placeholder="Location"
              className=" mr-sm-2"
            />
          </Col>
          <Col xs="auto">
            <Button
              type="submit"
              className={styles.navbarButton}
            >
              Search
            </Button>
          </Col>
        </Row>
      </Nav>
    </Navbar>
  );
};

export default NavBar;
