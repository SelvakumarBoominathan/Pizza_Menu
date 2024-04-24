import React from 'react';

const Footer = () => {

  const hour = new Date().getHours();
  const openHour = 12;
  const colseHour = 22;
  const isOpen = hour >= openHour && hour <= colseHour;

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
      <button className={`${props.isOpen ? 'btn' : 'disabled'}`} disabled = {!props.isOpen} >Order</button>
    </div>
  )
}


