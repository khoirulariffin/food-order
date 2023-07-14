import React from "react";

import Summary from "./Summary/Summary";
import Available from "./Available/Available";

const Meals = () => {
  return (
    <React.Fragment>
      <Summary />
      <Available />
    </React.Fragment>
  );
};

export default Meals;
