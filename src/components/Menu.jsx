import React from 'react';

const Menu = ({ pizzas }) => {


  return (
    <div className='menu'>
      <h2>OUR MENU</h2>
      <div className='pizzas'>
        {pizzas.map((pizza, index) => (
          <div key={index} className={`pizza ${pizza.soldOut ? 'sold-out'  : 'pizza'}`}>
            <img src={pizza.photoName}  alt={pizza.name} />
            <div>
              <h3>{pizza.name}</h3>
              <p>{pizza.ingredients}</p>
              <p className='sold-out'>{pizza.soldOut ? <span>SOLD OUT!</span> : <span>{pizza.price}</span>}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Menu;