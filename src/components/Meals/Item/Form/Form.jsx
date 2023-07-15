import React, { useRef, useState } from "react";
import PropTypes from "prop-types";

import classes from "./Form.module.css";
import Input from "../../../UI/Input/Input";

const Form = (props) => {
  const amountInputRef = useRef();
  const [amountIsValid, setAmountIsValid] = useState(true);

  const submitHandler = (e) => {
    e.preventDefault();

    const enteredAmount = Number(amountInputRef.current.value);

    if (enteredAmount < 1 || enteredAmount > 5) {
      setAmountIsValid(false);
      return;
    }

    props.onAddToCart(enteredAmount);
  };

  return (
    <React.Fragment>
      <form onSubmit={submitHandler} className={classes.form}>
        <Input
          ref={amountInputRef}
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
        {!amountIsValid && <p>Please entered a valid amount (1-5).</p>}
      </form>
    </React.Fragment>
  );
};

Form.propTypes = {
  id: PropTypes.string.isRequired,
  onAddToCart: PropTypes.func.isRequired,
};

export default Form;
