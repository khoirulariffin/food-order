import React, { useContext } from "react";
import PropTypes from "prop-types";

import CartIcon from "../../../Cart/CartIcon";

import classes from "./CartButton.module.css";
import CartContext from "../../../../store/cart-context";

const CartButton = (props) => {
  const cartCtx = useContext(CartContext);

  const numberOfCartItems = cartCtx.items.reduce((currNumber, item) => {
    return currNumber + item.amount;
  }, 0);

  return (
    <React.Fragment>
      <button className={classes.button} onClick={props.onClick}>
        <span className={classes.icon}>
          <CartIcon />
        </span>
        <span>Your Cart</span>
        <span className={classes.badge}>{numberOfCartItems}</span>
      </button>
    </React.Fragment>
  );
};

CartButton.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default CartButton;
