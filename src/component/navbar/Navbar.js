import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function MainNavbar() {
  const handleLogout = () => {
    localStorage.removeItem('userToken')
  }
  const token = localStorage.getItem('userToken')
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="/home">Welcome to my applìlication</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="position-end">
            <Nav.Link href="/home">Home</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item className={`${token && 'd-none'}`} href="/register">Register</NavDropdown.Item>
              <NavDropdown.Item className={`${token && 'd-none'}`} href="/login">
                Login
              </NavDropdown.Item>
              <NavDropdown.Divider className={`${token && 'd-none'}`} />
              <NavDropdown.Item onClick={handleLogout} href="/login">
                Logout
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MainNavbar;