import React from "react";

import classes from "./Available.module.css";
import Card from "../../UI/Card/Card";
import Item from "../Item/Item";

const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Sushi",
    description: "Finest fish and veggies",
    price: 22.99,
  },
  {
    id: "m2",
    name: "Schnitzel",
    description: "A german specialty!",
    price: 16.5,
  },
  {
    id: "m3",
    name: "Barbecue Burger",
    description: "American, raw, meaty",
    price: 12.99,
  },
  {
    id: "m4",
    name: "Green Bowl",
    description: "Healthy...and green...",
    price: 18.99,
  },
];

const Available = () => {
  const mealList = DUMMY_MEALS.map((meal) => (
    <Item
      key={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
      id={meal.id}
    />
  ));

  return (
    <React.Fragment>
      <section className={classes.meals}>
        <Card>
          <ul>{mealList}</ul>
        </Card>
      </section>
    </React.Fragment>
  );
};

export default Available;
