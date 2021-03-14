import { reduxForm } from "redux-form";
import React from "react";
import FoodCard from "./FoodCard";
import Lobster from "../../assets/Lobster.png";

class MeatAndSeafood extends React.Component {
  render() {
    return (
      <div className="container">
        <h1> Meat and Seafood </h1>
        <FoodCard image={Lobster} />
      </div>
    );
  }
}

export default reduxForm({
  form: "meatAndSeafood", // a unique identifier for this form
})(MeatAndSeafood);
