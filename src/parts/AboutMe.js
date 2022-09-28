import React from 'react';

import { Fade } from "react-awesome-reveal";
import ImageHeroFrame2 from 'assets/images/img-hero-frame-2.png';
import Button from 'elements/Button';

const AboutMe = (props) => {
  const { desc, imageUrl } = props.data;

  return (
    <section id='about-me' className='container' ref={props.refAboutMe}>
      <Fade direction='up' fraction={1} triggerOnce>
        <div className='row align-items-center'>
          <div className='col-12 col-md-6 order-2 order-md-1 pt-5 pt-md-0'>
            <div className='image-hero position-relative hero-md-start'>
              <img
                src={imageUrl}
                alt='My Hero'
                className='img-fluid position-absolute'
                style={{ margin: '-15px 0 0 -15px', zIndex: 1 }}
              />
              <img
                src={ImageHeroFrame2}
                alt='Frame Hero'
                className='img-fluid position-absolute'
                style={{ margin: '0 -15px -15px 0' }}
              />
            </div>
          </div>
          <div className='col-12 col-md-6 order-1 order-md-2'>
            <h4 className='section-title text-center text-md-start'>About Me</h4>
            <p className='mb-5 mt-4 text-paragraph  text-center text-md-start'>{desc}</p>
            <div className='text-center text-md-start'>
              <Button className='btn px-4' hasShadow isPrimary>
                Download CV
              </Button>
            </div>
          </div>
        </div>
      </Fade>
    </section>
  );
};

export default AboutMe;
