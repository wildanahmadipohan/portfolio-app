import React from 'react';

import IconText from './IconText';
import Button from 'elements/Button';

import IconGit from 'assets/images/ic_git.svg';
import IconIn from 'assets/images/ic_in.svg';

const Footer = (props) => {
  return (
    <footer>
      <div className='container'>
        <div className='d-flex flex-column flex-md-row align-items-center justify-content-between'>
          <div className='py-4 text-center text-md-start'>
            <IconText />
            <div className='sosmed pt-2'>
              <Button type='link' href='https://github.com/wildanahmadipohan' isExternal target='_blank'>
                <img src={IconGit} alt='Github' />
              </Button>
              <Button type='link' href='https://www.linkedin.com/in/wildan-ahmadi-pohan' isExternal target='_blank'>
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
