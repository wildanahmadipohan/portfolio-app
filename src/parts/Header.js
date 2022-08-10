import React from 'react';

import Button from 'elements/Button';
import IconText from './IconText';
import { useLocation } from 'react-router-dom';

const Header = (props) => {
  const location = useLocation();

  const getNavLinkClass = (path) => {
    return location.pathname === path ? 'active' : '';
  };

  return (
    <header className='spacing-sm'>
      <div className='container'>
        <nav className='navbar navbar-expand-md navbar-light'>
          <IconText />
          <div className='collapse navbar-collapse'>
            <ul className='navbar-nav'>
              <li className={`nav-item ${getNavLinkClass('/')}`}>
                <Button className='nav-link' type='link' href=''>
                  Home
                </Button>
              </li>
              <li className={`nav-item ${getNavLinkClass('/about-me')}`}>
                <Button className='nav-link' type='link' href='/about-me'>
                  About Me
                </Button>
              </li>
              <li className={`nav-item ${getNavLinkClass('/ability')}`}>
                <Button className='nav-link' type='link' href='/ability'>
                  Ability
                </Button>
              </li>
              <li className={`nav-item ${getNavLinkClass('/portfolio')}`}>
                <Button className='nav-link' type='link' href='/portfolio'>
                  Portfolio
                </Button>
              </li>
              <li className={`nav-item ${getNavLinkClass('/certificate')}`}>
                <Button className='nav-link' type='link' href='/certificate'>
                  Certificate
                </Button>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
