// import {Link} from 'react-router-dom'
import {Nav,Navbar} from 'react-bootstrap';
import './navbar.css';

const navbar = () => {
  return (
    <div className="navbar">
    <Navbar expand="lg">
    <Navbar.Brand className="heading" href="/task1/#/"> Assignment by Zentri Studios </Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav"/>
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mr-auto">
      <Nav.Link href="/task1/#/"> Home Page </Nav.Link>
       <Nav.Link href="/task1/#/analytics"> Analytics Page </Nav.Link>
      </Nav>     
    </Navbar.Collapse>
  </Navbar>
    </div>
  );
}


export default navbar;