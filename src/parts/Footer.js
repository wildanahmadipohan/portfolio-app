import React from 'react';

import IconText from './IconText';
import Button from 'elements/Button';

import IconFb from 'assets/images/ic_fb.svg';
import IconIg from 'assets/images/ic_ig.svg';
import IconIn from 'assets/images/ic_in.svg';

const Footer = (props) => {
  return (
    <footer>
      <div className='container'>
        <div className='d-flex flex-column flex-md-row align-items-center justify-content-between'>
          <div className='py-4 text-center text-md-start'>
            <IconText />
            <div className='sosmed pt-2'>
              <Button type='link' href='https://www.facebook.com/wildanahmadipohan' isExternal>
                <img src={IconFb} alt='Facebook' />
              </Button>
              <Button type='link' href='https://www.instagram.com/wildanahmadipohan' isExternal>
                <img src={IconIg} alt='Instagram' />
              </Button>
              <Button type='link' href='https://www.linkedin.com/wildanahmadipohan' isExternal>
                <img src={IconIn} alt='LinkedIn' />
              </Button>
            </div>
          </div>
          <p className='text-paragraph'>&copy; Wildan Ahmadi Pohan • {new Date().getFullYear()}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
