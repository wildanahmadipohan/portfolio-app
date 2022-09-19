import React, { useEffect, useRef } from 'react';

import Typed from 'typed.js';

import ImageHeroFrame from 'assets/images/img-hero-frame-1.png';
import Button from 'elements/Button';

const Hero = (props) => {
  const nameEl = useRef(null);
  const { title, subtitle, imageUrl } = props.data;

  useEffect(() => {
    const typed = new Typed(nameEl.current, {
      strings: title,
      typeSpeed: 100,
      loop: true,
    });

    // Destropying
    return () => {
      typed.destroy();
    };
  }, [title]);

  const showMeNow = () =>
    window.scrollTo({
      top: props.refAboutMe.current.offsetTop - 100,
      behavior: 'smooth',
    });

  return (
    <section className='hero container pt-4' ref={props.refHome}>
      <div className='row align-items-center'>
        <div className='col-12 col-md-6 pr-5 d-flex flex-column align-items-center align-items-md-start'>
          <h1 className='font-weight-bold mb-0 text-primary lh-sm '>Hello, I am</h1>
          <h1 className='font-weight-bold mb-3 text-primary lh-sm '>
            <span className='text-secondary' ref={nameEl}></span>
          </h1>
          <p className='mb-5 w-50 text-paragraph text-center text-md-start'>{subtitle}</p>
          <div className='cta'>
            <Button className='btn px-4' hasShadow isPrimary onClick={showMeNow}>
              Show Me Now
            </Button>
            <Button type='button' className='btn btn-link px-4'>
              Contact Me &#10132;
            </Button>
          </div>
        </div>

        <div className='col-12 col-md-6 pl-5 py-5'>
          <div className='image-hero position-relative hero-md-end'>
            <img
              src={imageUrl}
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
