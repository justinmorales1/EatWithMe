import React from "react";
import { reduxForm, Field } from "redux-form";

class AccountForms extends React.Component {
  render() {
    const { handleSubmit } = this.props;
    return (
      <div>
        <form onSubmit={handleSubmit}>
          <div className="container">
            <h2> Account Forms </h2>
            <div>
              <label> Full Name </label>
              <Field
                name="thirdPartyName"
                type="text"
                component="input"
                label="Username"
                placeholder="Third Party Name"
                style={{ marginBottom: "20px" }}
              />
            </div>
            <div>
              <label>Email</label>
              <Field
                name="email"
                type="text"
                component="input"
                label="Email"
                placeholder="Email"
                style={{ marginBottom: "20px" }}
              />
            </div>
            <div>
              <label>Address</label>
              <Field
                name="address"
                type="text"
                component="input"
                label="adress"
                placeholder="Adress"
                style={{ marginBottom: "20px" }}
              />
            </div>
            <button
              type="submit"
              className="btn waves-effect waves-light right"
            >
              Submit
              <i className="material-icons right">send</i>
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default reduxForm({
  form: "AccountForms",
})(AccountForms);
