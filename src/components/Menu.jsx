import React from 'react';

const Menu = ({ pizzas }) => {
  return (
    <div>
      {pizzas.map((pizza, index) => (
        <div key={index}>
          <img src={pizza.photoName} alt={pizza.name} />
          <h5>Name: {pizza.name}</h5>
          <h3>Price: {pizza.price}</h3>
          <p>Available : {pizza.soldOut ? "No" : "Yes"}</p>
        </div>
      ))}
    </div>
  )
}

export default Menu;
