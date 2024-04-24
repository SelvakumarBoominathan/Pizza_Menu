import React from 'react';

const Footer = () => {
  return (
    <div className='footer'>
      <div className='order'>
      {new Date().toLocaleTimeString()}. We are currentluy open!
      <button className='btn'>Order now</button>
      </div>
    </div>
  )
}

export default Footer;
