import React from 'react';

import ImageHero4 from 'assets/images/img-hero-4.png';
import ImageHeroFrame2 from 'assets/images/img-hero-frame-2.png';
import Button from 'elements/Button';

const AboutMe = (props) => {
  return (
    <section className='container' ref={props.refAboutMe}>
      <div className='row align-items-center'>
        <div className='col-12 col-md-6 order-2 order-md-1 pt-5 pt-md-0'>
          <div className='image-hero position-relative hero-md-start'>
            <img
              src={ImageHero4}
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
          <p className='mb-5 text-paragraph  text-center text-md-start'>
            I am a bachelor of information systems. I have an interest in information technology.
            Currently, I focus on programming, especially Web Development. I have an understanding
            of HTML, CSS and Javascript programming language.
          </p>
          <div className='text-center text-md-start'>
            <Button className='btn px-4' hasShadow isPrimary>
              Download CV
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
