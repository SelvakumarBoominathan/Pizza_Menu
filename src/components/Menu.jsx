import React from 'react';

const Menu = ({ pizzas }) => {
  return (
    <div className='menu'>
      <h2>OUR MENU</h2>
      <div className='pizzas'>
        {pizzas.map((pizza, index) => (
          <div key={index} className='pizza'>
            <img src={pizza.photoName} className='pizza' alt={pizza.name} />
            <div>
              <h3>Name: {pizza.name}</h3>
              <p>Price: {pizza.price}</p>
              <p className='sold-out'>Available : {pizza.soldOut ? <span>No</span> : <span>Yes</span>}</p>
            </div>
          </div>

        ))}
      </div>
    </div>
  )
}

export default Menu;
