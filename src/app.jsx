import React, { useState } from "react";
import Header from "./components/Layout/Header/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import CartProvider from "./store/CartProvider";

const App = () => {
  const [isCartShown, setIsCartShown] = useState(false);

  const hideShowCartHandler = () => {
    setIsCartShown((prevCartShown) => !prevCartShown);
  };

  return (
    <React.Fragment>
      <CartProvider>
        {isCartShown && <Cart onCloseCart={hideShowCartHandler} />}
        <Header onShowCart={hideShowCartHandler} />
        <main>
          <Meals />
        </main>
      </CartProvider>
    </React.Fragment>
  );
};

export default App;
