import React from "react";
import PropTypes from "prop-types";

import classes from "./Item.module.css";

const Item = (props) => {
  const price = `$${props.price.toFixed(2)}`;

  return (
    <React.Fragment>
      <li className={classes["cart-item"]}>
        <div>
          <h2>{props.name}</h2>
          <div className={classes.summary}>
            <span className={classes.price}>{price}</span>
            <span className={classes.amount}>x {props.amount}</span>
          </div>
        </div>
        <div className={classes.actions}>
          <button onClick={props.onRemove}>-</button>
          <button onClick={props.onAdd}>+</button>
        </div>
      </li>
    </React.Fragment>
  );
};

Item.propTypes = {
  price: PropTypes.number,
  name: PropTypes.string,
  amount: PropTypes.number,
  onRemove: PropTypes.func.isRequired,
  onAdd: PropTypes.func.isRequired,
};

export default Item;
