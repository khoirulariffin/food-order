import React from "react";
import PropTypes from "prop-types";

import classes from "./Input.module.css";

const Input = (props) => {
  return (
    <React.Fragment>
      <div className={classes.input}>
        <label htmlFor={props.input.id}>{props.label}</label>
        <input {...props.input} />
      </div>
    </React.Fragment>
  );
};

Input.propTypes = {
  label: PropTypes.string.isRequired,
  input: PropTypes.object.isRequired,
};

export default Input;
