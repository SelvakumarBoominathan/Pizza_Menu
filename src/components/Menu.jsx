import React from 'react';
import Data from 'data.js';

const Menu = (props) => {
  return (
    <div>
      <img src={props.photoName} alt={props.name} />
      <h5>Name: {props.name}</h5>
      <h3>Price: {props.price}</h3>
      <p>Available : {props.soldOut ? "No" : "Yes"}</p>
    </div>
  )
}

export default Menu;
