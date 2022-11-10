import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import favicon from "../asests/favicon.ico";

import { Link } from "react-router-dom";


export const TopNav = () => {
  return (
    <Navbar collapseOnSelect bg="none" expand="md">
      <Container>
    
        {/* <Navbar.Brand href="#">Rai</Navbar.Brand> */}
        <Link className="nav-link" to="/"><img src={favicon} width="50%"/></Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Link className="nav-link" to="/skills">Skills</Link>
            <Link className="nav-link" to="/experience">Experience</Link>
            <Link className="nav-link" to="/contactme">Contact Me</Link>
            <Link className="nav-link" to="/aboutme">About Me</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default TopNav;