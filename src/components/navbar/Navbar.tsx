import { Link } from 'react-router-dom'
import * as FontIcons from 'react-icons/fa';

export const Navbar = () => {
  return (
    <div className="navbar">
      <Link to="/">
        <a href="https://www.kaviartstudio.in/"><img src="https://static.wixstatic.com/media/c9480b_f4b9be4ef3034f85a8508757633cf329~mv2.png/v1/crop/x_47,y_67,w_705,h_424/fill/w_130,h_79,al_c,usm_0.66_1.00_0.01,enc_auto/IAsset%209.png" alt="KaviArtStudio" /></a>
      </Link>
      <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/about-us">About Us</Link></li>
      <li><Link to="/courses">Courses</Link></li>
      <li><Link to="/gallery">Gallery</Link></li>
      <li><Link to="/contact-us">Contact Us</Link></li>
      </ul>
      <button type='button'>
        Register
      </button>
      </div>
  )
}

