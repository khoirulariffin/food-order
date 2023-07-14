import React from "react";
import PropTypes from "prop-types";

import classes from "./Card.module.css";

const Card = (props) => {
  return (
    <React.Fragment>
      <div className={classes.card}>{props.children}</div>
    </React.Fragment>
  );
};

Card.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Card;
