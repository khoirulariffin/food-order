import React from "react";
import PropTypes from "prop-types";

import classes from "./Form.module.css";
import Input from "../../../UI/Input/Input";

const Form = (props) => {
  const submitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <React.Fragment>
      <form onSubmit={submitHandler} className={classes.form}>
        <Input
          label="Amount"
          input={{
            id: "amount_" + props.id,
            type: "number",
            min: 1,
            max: 5,
            step: 1,
            defaultValue: 1,
          }}
        />
        <button>+ add</button>
      </form>
    </React.Fragment>
  );
};

Form.propTypes = {
  id: PropTypes.string.isRequired,
};

export default Form;
