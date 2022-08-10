import React, { useEffect, useRef } from 'react';

import Typed from 'typed.js';

import ImageHero2 from 'assets/images/img-hero-2.png';
import ImageHeroFrame from 'assets/images/img-hero-frame-1.png';
import Button from 'elements/Button';

const Hero = (props) => {
  const nameEl = useRef(null);

  useEffect(() => {
    const typed = new Typed(nameEl.current, {
      strings: ['Wildan Ahmadi Pohan', 'Website Developer'],
      typeSpeed: 100,
      loop: true,
    });

    // Destropying
    return () => {
      typed.destroy();
    };
  }, []);

  const showMeNow = () =>
    window.scrollTo({
      top: props.refAboutMe.current.offsetTop - 30,
      behavior: 'smooth',
    });

  return (
    <section className='container pt-4'>
      <div className='row align-items-center'>
        <div className='col-12 col-md-6 pr-5'>
          <h1 className='font-weight-bold mb-3 text-primary lh-sm text-center text-md-start'>
            Hello, I am <br />
            <span className='text-secondary' ref={nameEl}></span>
          </h1>
          <p className='mb-5 text-paragraph  text-center text-md-start'>
            Looking for a Website Developer? <br /> Let me introduce my self first.
          </p>
          <div className='text-center text-md-start'>
            <Button className='btn px-4' hasShadow isPrimary onClick={showMeNow}>
              Show Me Now
            </Button>
          </div>
        </div>

        <div className='col-12 col-md-6 pl-5 py-5'>
          <div className='image-hero position-relative'>
            <img
              src={ImageHero2}
              alt='My Hero'
              className='img-fluid position-absolute'
              style={{ margin: '-15px 0 0 -15px', zIndex: 1 }}
            />
            <img
              src={ImageHeroFrame}
              alt='Frame Hero'
              className='img-fluid position-absolute'
              style={{ margin: '0 -15px -15px 0' }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
