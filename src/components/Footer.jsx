import React from 'react';

const Footer = () => {

  const hour = new Date().getHours();
  const openHour = 12;
  const colseHour = 22;
  const isOpen = hour >= openHour && hour <= colseHour;

  return (
    <footer className='footer'>
      {isOpen && (
        <div className='order'>
        <p>We are currentluy open until {closeHour}:00. Come visit us or Order Pizzas now!</p> 
        <button className='btn'>Order</button>
        </div>
      )}
    </footer>
  )
}

export default Footer;
