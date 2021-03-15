import { reduxForm } from "redux-form";
import React from "react";
import FoodCard from "./FoodCard";
import foodDetails from "../../assets/foodImages";

class MeatAndSeafood extends React.Component {
  renderCard = foodDetails.map((currentObject) => {
    return (
      <div className="col s3">
        <FoodCard
          image={currentObject.image}
          title={currentObject.title}
          price={currentObject.price}
        />
      </div>
    );
  });
  render() {
    return (
      <div className="container">
        <div className="row">{this.renderCard}</div>
      </div>
    );
  }
}

export default reduxForm({
  form: "meatAndSeafood", // a unique identifier for this form
})(MeatAndSeafood);
