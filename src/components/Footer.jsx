import React from 'react';

const Footer = () => {
  return (
    <div className='footer'>
      {new Date().toLocaleTimeString()}. We are currentluy open!
    </div>
  )
}

export default Footer;
