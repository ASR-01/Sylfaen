import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import LogoImg from '../../../public/icon.svg';
import { navLinks } from '../../utils/NavbarUtils';
import "./Navbar.css"

const Navbar = () => {
  const [activeLink, setActiveLink] = useState('');
  const location = useLocation();

  // Update active link based on current location
  useEffect(() => {
    setActiveLink(location.pathname);
  }, [location]);

  return (
    <header className='Fixed_header'>
      <div className='nav_container'>
        <div className='nav_img_container'>
          <Link to="/">
            <img className='nav_img' src={LogoImg} />
          </Link>
        </div>
        <div className='nav_link_container'>
          {navLinks?.map((items) => (
            <Link
              className={`nav_links ${activeLink === items.path ? 'active' : ''}`}
              key={items.id}
              to={items.path}
              onClick={() => setActiveLink(items.path)}
            >
              <div className='nav_icon'>
                <items.icon />
              </div>
              <div>
                {items.title}
              </div>
            </Link>
          ))}
        </div>


       <div className='nav_link_container_bottom'>
       <div className='nav_link_container_2'>
          {navLinks?.map((items) => (
            <Link
              className={`nav_links ${activeLink === items.path ? 'active' : ''}`}
              key={items.id}
              to={items.path}
              onClick={() => setActiveLink(items.path)}
            >
              <div className='nav_icon_2'>
                <items.icon />
              </div>
              <div className='nav_title'>
                {items.title}
              </div>
            </Link>
          ))}
        </div>
       </div>

      </div>
    </header>
  );
};

export default Navbar;
