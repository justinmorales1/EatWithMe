import { Field, reduxForm } from "redux-form";
import React from "react";

class FruitAndVegetables extends React.Component {
  //This class component is showing an example of not Keeping it dry and having to re code buttons
  //that are already available in the Accounts component.
  handle = () => {
    console.log("handleSubmit");
  };

  render() {
    const { handleSubmit } = this.props;
    return (
      <div>
        <form onSubmit={handleSubmit(this.handle)}>
          <div className="container">
            <div> Fruits </div>
            <div> Vegetables </div>
          </div>
        </form>
      </div>
    );
  }
}

export default reduxForm({
  form: "fruitAndVegetables",
})(FruitAndVegetables);
