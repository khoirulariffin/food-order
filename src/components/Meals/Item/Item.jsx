import React from "react";
import PropTypes from "prop-types";

import classes from "./Item.module.css";
import Form from "./Form/Form";

const Item = (props) => {
  const price = `$${props.price.toFixed(2)}`;

  return (
    <React.Fragment>
      <li className={classes.meal}>
        <div>
          <h3>{props.name}</h3>
          <div className={classes.description}>{props.description}</div>
          <div className={classes.price}>{price}</div>
        </div>
        <div>
          <Form id={props.id} />
        </div>
      </li>
    </React.Fragment>
  );
};

Item.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default Item;
