import { reduxForm } from "redux-form";
import React from "react";

class MeatAndSeafood extends React.Component {
  render() {
    return (
      <div className="container">
        <div> Meat </div>
        <div> Seafood </div>
      </div>
    );
  }
}

export default reduxForm({
  form: "meatAndSeafood", // a unique identifier for this form
})(MeatAndSeafood);
