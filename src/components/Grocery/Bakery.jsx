import { reduxForm } from "redux-form";
import React from "react";

class Bakery extends React.Component {
  render() {
    return (
      <div className="container">
        <div> Bakery </div>
      </div>
    );
  }
}

export default reduxForm({
  form: "bakery", // a unique identifier for this form
})(Bakery);
