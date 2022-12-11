import "./App.css";
import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Routes, Route, Link } from "react-router-dom";
import About from "./components/About";
import Examples from "./components/Examples";
import Contact from "./components/Contact";

export default class App extends React.Component {
  render() {
    return (
      <div className="App">
        <>
          <Navbar bg="dark" variant="dark">
            <Container>
              <Navbar.Brand as={Link} to="/#">Navbar</Navbar.Brand>
              <Nav className="me-right">
                <Nav.Link as={Link} to="/about">
                  Haqqında
                </Nav.Link>
                <Nav.Link as={Link} to="/examples">
                  İş nümunələri
                </Nav.Link>
                <Nav.Link as={Link} to="/contact">
                  Əlaqə məlumatları
                </Nav.Link>
              </Nav>
            </Container>
          </Navbar>
        </>
        <Routes>
          <Route path="/about" element={<About/>} />
          <Route path="/examples" element={<Examples/>} />
          <Route path="/contact" element={<Contact/>} />
        </Routes>
      </div>
    );
  }
}
