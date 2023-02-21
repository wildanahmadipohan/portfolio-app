import React from 'react';

import Button from 'elements/Button';
import IconText from './IconText';
import MobileMenu from './MobileMenu';
import { useNavigate } from 'react-router-dom';

const Header = (props) => {
  const navigate = useNavigate();

  const goTo = (ref) =>
    window.scrollTo({
      top: ref - 100,
      behavior: 'smooth',
    });

  const showSection = (section) => {
    switch (section) {
      case 'home':
        goTo(props.refHome.current.offsetTop);
        break;

      case 'about-me':
        goTo(props.refAboutMe.current.offsetTop);
        break;

      case 'ability':
        goTo(props.refAbility.current.offsetTop);
        break;

      case 'portfolio':
        goTo(props.refPortfolio.current.offsetTop);
        break;

      case 'certificate':
        goTo(props.refCertificate.current.offsetTop);
        break;

      default:
        break;
    }
  };

  return props.isCentered ? (
    <header className='spacing-sm'>
      <div className='container'>
        <nav className='navbar navbar-expand-md navbar-light d-flex justify-content-center'>
          <Button type='button' isExternal className='btn p-0 nav-back d-none d-md-flex' onClick={() => navigate(-1)}>
            <span className="arrow">&#10132;</span> Back
          </Button>
          <IconText />
          <MobileMenu {...props} />
        </nav>
      </div>
    </header>
  ) 
  : 
  (
    <header className='spacing-sm'>
      <div className='container'>
        <nav className='navbar navbar-expand-md navbar-light justify-content-center'>
          <IconText />
          <div className='collapse navbar-collapse'>
            <ul className='navbar-nav'>
              <li className='nav-item active'>
                <Button className='btn nav-link' onClick={() => showSection('home')}>
                  Home
                </Button>
              </li>
              <li className='nav-item'>
                <Button className='btn nav-link' onClick={() => showSection('about-me')}>
                  About Me
                </Button>
              </li>
              <li className='nav-item'>
                <Button className='btn nav-link' onClick={() => showSection('ability')}>
                  Ability
                </Button>
              </li>
              <li className='nav-item'>
                <Button className='btn nav-link' onClick={() => showSection('portfolio')}>
                  Portfolio
                </Button>
              </li>
              <li className='nav-item'>
                <Button className='btn nav-link' onClick={() => showSection('certificate')}>
                  Certificate
                </Button>
              </li>
            </ul>
          </div>
          <MobileMenu {...props} />
        </nav>
      </div>
    </header>
  );
};

export default Header;
