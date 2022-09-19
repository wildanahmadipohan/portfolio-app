import Button from 'elements/Button';
import React from 'react';

import IconHome from 'assets/images/ic_home.svg';
import IconAboutMe from 'assets/images/ic_about_me.svg';
import IconAbility from 'assets/images/ic_ability.svg';
import IconPortfolio from 'assets/images/ic_portfolio.svg';
import IconCertificate from 'assets/images/ic_certificate.svg';

const MobileMenu = (props) => {
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
    <div className='mobile-menu'>
      <ul className='navbar-nav'>
        <li className='nav-item active'>
          <Button className='btn nav-link' onClick={() => showSection('home')}>
            <img src={IconHome} alt='Home' />
          </Button>
        </li>
        <li className='nav-item'>
          <Button className='btn nav-link' onClick={() => showSection('about-me')}>
            <img src={IconAboutMe} alt='About Me' />
          </Button>
        </li>
        <li className='nav-item'>
          <Button className='btn nav-link' onClick={() => showSection('ability')}>
            <img src={IconAbility} alt='Ability' />
          </Button>
        </li>
        <li className='nav-item'>
          <Button className='btn nav-link' onClick={() => showSection('portfolio')}>
            <img src={IconPortfolio} alt='Portfolio' />
          </Button>
        </li>
        <li className='nav-item'>
          <Button className='btn nav-link' onClick={() => showSection('certificate')}>
            <img src={IconCertificate} alt='Certificate' />
          </Button>
        </li>
      </ul>
    </div>
  );
};

export default MobileMenu;
