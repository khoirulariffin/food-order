import React from "react";

import { meals } from "../../../assets";

import classes from "./Header.module.css";

import HeaderCartButton from "./CartButton/CartButton";

const Header = () => {
  return (
    <React.Fragment>
      <header className={classes.header}>
        <h1>React Meals</h1>
        <HeaderCartButton />
      </header>
      <div className={classes["main-image"]}>
        <img src={meals} alt="meals" />
      </div>
    </React.Fragment>
  );
};

export default Header;
