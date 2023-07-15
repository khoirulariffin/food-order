import React from "react";
import PropTypes from "prop-types";

import CartIcon from "../../../Cart/CartIcon";

import classes from "./CartButton.module.css";

const CartButton = (props) => {
  return (
    <React.Fragment>
      <button className={classes.button} onClick={props.onClick}>
        <span className={classes.icon}>
          <CartIcon />
        </span>
        <span>Your Cart</span>
        <span className={classes.badge}>3</span>
      </button>
    </React.Fragment>
  );
};

CartButton.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default CartButton;
