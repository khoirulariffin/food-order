import React from "react";
import PropTypes from "prop-types";
import CartContext from "./cart-context";

const CartProvider = (props) => {
  const addItemHandler = (item) => {};

  const removeItemHandler = (id) => {};

  const cartContext = {
    items: [],
    totalAmount: 0,
    addItem: addItemHandler,
    removeItem: removeItemHandler,
  };

  return (
    <React.Fragment>
      <CartContext.Provider value={cartContext}>
        {props.children}
      </CartContext.Provider>
    </React.Fragment>
  );
};

CartProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default CartProvider;
