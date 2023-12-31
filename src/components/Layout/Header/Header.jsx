import React from "react";
import PropTypes from "prop-types";

import { meals } from "../../../assets";

import classes from "./Header.module.css";

import HeaderCartButton from "./CartButton/CartButton";

const Header = (props) => {
  return (
    <React.Fragment>
      <header className={classes.header}>
        <h1>React Meals</h1>
        <HeaderCartButton onClick={props.onShowCart} />
      </header>
      <div className={classes["main-image"]}>
        <img src={meals} alt="meals" />
      </div>
    </React.Fragment>
  );
};

Header.propTypes = {
  onShowCart: PropTypes.func.isRequired,
};

export default Header;
