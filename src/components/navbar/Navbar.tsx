// import { Link } from 'react-router-dom'
import * as FontIcons from 'react-icons/fa';
import { Navbar,Nav, Container, Offcanvas} from "react-bootstrap";
import { Link } from 'react-router-dom';

export const NavBar = () => {
  return (
    <>
    <Navbar  className='navbar' collapseOnSelect expand="lg" >
      <Navbar.Brand className='ml-0' href='/'><img src="https://static.wixstatic.com/media/c9480b_f4b9be4ef3034f85a8508757633cf329~mv2.png/v1/crop/x_47,y_67,w_705,h_424/fill/w_130,h_79,al_c,usm_0.66_1.00_0.01,enc_auto/IAsset%209.png" alt="KaviArtStudio" /></Navbar.Brand>
      <Navbar.Toggle className='success' aria-controls="offcanvasNavbar" />
      <Navbar.Collapse id='offcanvasNavbar'>
      <Nav className='mt-5'>
        <Nav.Item>
        <Link to="/">Home</Link>
        </Nav.Item>
        <Nav.Item>
        <Link to="/about-us">About Us</Link>
        </Nav.Item>
        <Nav.Item>
        <Link to="/courses">Course</Link>
        </Nav.Item>
        <Nav.Item>
        <Link to="/gallery">Gallery</Link>
        </Nav.Item>
        <Nav.Item>
        <Link to="/contact-us">Contact</Link>
        </Nav.Item>
        <Nav.Item >
        <button className='registerButton' type='button'>
          Register
        </button>
        </Nav.Item>
      </Nav>
      </Navbar.Collapse>
    </Navbar>

      </>  
  )
}

