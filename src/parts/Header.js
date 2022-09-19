import React from 'react';

import Button from 'elements/Button';
import IconText from './IconText';
import MobileMenu from './MobileMenu';

const Header = (props) => {
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

  return (
    <header className='spacing-sm'>
      <div className='container'>
        <nav className='navbar navbar-expand-md navbar-light'>
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
