import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


export const TopNav = () => {
  return (
    <Navbar collapseOnSelect bg="none" expand="md">
      <Container>
        <Navbar.Brand href="#">Rai</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link  href="#">Skills</Nav.Link>
            <Nav.Link href="#">Experiences</Nav.Link>
            <Nav.Link href="#">Contact Me</Nav.Link>
            <Nav.Link href="#">About Me</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default TopNav;