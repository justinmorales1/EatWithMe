import { reduxForm } from "redux-form";
import React from "react";

class Beverages extends React.Component {
  render() {
    return (
      <div className="container">
        <div> Beverages </div>
      </div>
    );
  }
}

export default reduxForm({
  form: "beverages", // a unique identifier for this form
})(Beverages);
