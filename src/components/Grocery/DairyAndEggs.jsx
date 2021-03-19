import React from "react";
import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form";
import { submitForm } from "../../actions/submitFormsAction";
import { retrieveForms } from "../../actions/httpRequests";
import foodDetails from "../../assets/foodDetails";
import FoodCard from "./FoodCard";

class DairyAndEggs extends React.Component {
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

const mapStateToProps = (state) => {
  return {
    userForms: state.userForms,
    storedForms: state.storedForms,
  };
};

DairyAndEggs = connect(mapStateToProps, { submitForm, retrieveForms })(
  DairyAndEggs
);

export default reduxForm({
  form: "dairyAndEggs",
  destroyOnUnmount: true,
})(DairyAndEggs);
