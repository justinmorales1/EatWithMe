import { reduxForm } from "redux-form";
import React from "react";

class Pantry extends React.Component {
  render() {
    return (
      <div className="container">
        <div> Pantry </div>
      </div>
    );
  }
}

export default reduxForm({
  form: "pantry", // a unique identifier for this form
})(Pantry);
