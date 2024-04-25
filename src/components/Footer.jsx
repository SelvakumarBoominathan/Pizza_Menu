import React from 'react';

const Footer = () => {

  const hour = new Date().getHours();
  const openHour = 12;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;
  // const isOpen = true;

  return (
    <footer className='footer'>
        <div className='order'>
        {isOpen ? (
        <p>We are currently open until {closeHour}:00. Come visit us or Order Pizzas now!</p> 
      ) : <p>We are closed now. Come visit us or Order Pizzas in working hours!</p>}
        <Button ShopStatus = {isOpen}/>
        </div>
      
    </footer>
  )
}

export default Footer;


const Button = (props) => {
  return (
    <div>
      <button className='btn' >Order</button>
    </div>
  )
}


