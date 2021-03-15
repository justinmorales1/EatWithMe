import { reduxForm } from "redux-form";
import React from "react";
import FoodCard from "./FoodCard";
import foodDetails from "../../assets/foodImages";

class MeatAndSeafood extends React.Component {
  renderCard = foodDetails.map((currentObject) => {
    return (
      <FoodCard
        image={currentObject.image}
        title={currentObject.title}
        price={currentObject.price}
      />
    );
  });
  render() {
    return <div className="container">{this.renderCard}</div>;
  }
}

export default reduxForm({
  form: "meatAndSeafood", // a unique identifier for this form
})(MeatAndSeafood);
