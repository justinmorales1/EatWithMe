import React from "react";
import {Field, reduxForm} from "redux-form";

class CreateAccount extends React.Component {
    render() {
        const { handleSubmit } = this.props;
        return (
            <div>
                <form onSubmit={handleSubmit}>
                    <div className="container">
                        <h2> Account Forms </h2>
                        <div>
                            <label> First Name </label>
                            <Field
                                name="firstName"
                                type="text"
                                component="input"
                                label="First Name"
                                placeholder="First Name"
                                style={{ marginBottom: "20px" }}
                            />
                        </div>
                        <div>
                            <label> Last Name </label>
                            <Field
                                name="lastName"
                                type="text"
                                component="input"
                                label="Last Name"
                                placeholder="Last Name"
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
                                label="address"
                                placeholder="Address"
                                style={{ marginBottom: "20px" }}
                            />
                        </div>
                        <div>
                            <label>Date of Birth</label>
                            <Field
                                name="dateOfBirth"
                                type="text"
                                component="input"
                                label="Date of Birth"
                                placeholder="Date of Birth"
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
        )
    }
}

export default reduxForm({
    form: "CreateAccountForm",
})(CreateAccount);