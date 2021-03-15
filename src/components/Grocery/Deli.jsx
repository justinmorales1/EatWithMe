import { reduxForm } from "redux-form";
import React from "react";

class Deli extends React.Component {
  render() {
    return (
      <div className="container">
        <div> Deli </div>
      </div>
    );
  }
}

export default reduxForm({
  form: "deli", // a unique identifier for this form
})(Deli);
