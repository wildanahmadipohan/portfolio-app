import React, { useEffect, useRef } from 'react';

import Typed from 'typed.js';
import { Fade, Slide } from "react-awesome-reveal";
import parse from 'html-react-parser';

import ImageHeroFrame from 'assets/images/img-hero-frame-1.png';
import Button from 'elements/Button';

const Hero = (props) => {
  const dynamicTitle = useRef(null);
  const { title, subtitle, imageUrl } = props.data;

  useEffect(() => {
    const typed = new Typed(dynamicTitle.current, {
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

  const base_url = process.env.REACT_APP_API_HOST;

  return (
    <section className='hero container pt-4' ref={props.refHome}>
      <Fade direction='up' fraction={0} triggerOnce>
        <div className='row align-items-center'>
          <div className='col-12 col-md-6 pr-5 d-flex flex-column align-items-center align-items-md-start'>
            <Slide direction='right' triggerOnce>
              <h1 className='font-weight-bold mb-0 lh-sm greeting-text'>Hello, I am</h1>
              <h1 className='font-weight-bold mb-3 text-primary lh-sm '>
                <span className='text-secondary' ref={dynamicTitle}></span>
              </h1>
              <p className='mb-5 w-50 text-paragraph text-center text-md-start mx-auto mx-md-0'>{parse(subtitle)}</p>
              <div className='cta d-flex align-item-center justify-content-around justify-content-md-start w-100'>
                <Button type='button' className='btn me-2' hasShadow isPrimary onClick={showMeNow}>
                  Show Me Now
                </Button>
                <Button type='link' href='#' isExternal className='btn btn-secondary'>
                  Contact Me &#10132;
                </Button>
              </div>
            </Slide>
          </div>

          <div className='col-12 col-md-6 pl-5 py-5'>
            <Slide triggerOnce>
              <div className='image-hero position-relative hero-md-end'>
                <img
                  src={`${base_url}/${imageUrl}`}
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
            </Slide>
          </div>
        </div>
      </Fade>
    </section>
  );
};

export default Hero;
