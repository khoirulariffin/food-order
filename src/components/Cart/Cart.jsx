import React from "react";
import PropTypes from "prop-types";

import classes from "./Cart.module.css";
import Modal from "../UI/Modal/Modal";

const Cart = (props) => {
  const cartItems = (
    <ul className={classes["cart-items"]}>
      {[{ id: "c1", name: "Sushi", amount: 2, price: 12.99 }].map((item) => (
        <li key={item.id}>{item.name}</li>
      ))}
    </ul>
  );

  return (
    <React.Fragment>
      <Modal onCloseCart={props.onCloseCart}>
        {cartItems}
        <div className={classes.total}>
          <span>Total Amount</span>
          <span>35.99</span>
        </div>
        <div className={classes.actions}>
          <button
            className={classes["button--alt"]}
            onClick={props.onCloseCart}
          >
            Close
          </button>
          <button className={classes.button}>Order</button>
        </div>
      </Modal>
    </React.Fragment>
  );
};

Cart.propTypes = {
  onCloseCart: PropTypes.func.isRequired,
};

export default Cart;
