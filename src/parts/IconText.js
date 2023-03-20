import React from 'react';
import Button from 'elements/Button';

import wapLogo from '../assets/images/wap-logo.png';

const IconText = () => {
  return (
    <Button className='brand-icon' href='/wapsite/' type='link'>
      <img src={wapLogo} alt="WAP" />
    </Button>
  );
};

export default IconText;
