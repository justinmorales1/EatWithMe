import React from "react";
import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form";
import { submitForm } from "../../actions/submitFormsAction";
import { retrieveForms } from "../../actions/httpRequests";

class DairyAndEggs extends React.Component {
  componentDidMount() {
    this.props.retrieveForms();
  }

  renderList = () => {
    return this.props.storedForms.map((employees, index) => {
      return (
        //value doesnt accept a plan object. You need to stringffy it or redux form will show value as [object, Object]
        <option key={index} value={JSON.stringify(employees)}>
          {" "}
          {employees.name}{" "}
        </option>
      );
    });
  };

  //When you select an option from the select element this will set the input fields to a new value
  updateFields = (e) => {
    const employeeData = JSON.parse(e.target.value);

    this.setState(() => {
      this.props.change("name", employeeData.name);
      this.props.change("employeeId", employeeData.employeeId);
      this.props.change("age", employeeData.age);
    });
  };

  render() {
    const { handleSubmit } = this.props;

    return (
      <form
        onSubmit={handleSubmit((formValues) =>
          this.props.submitForm(formValues)
        )}
      >
        <div className="container">
          <div> Dairy </div>
          <div> Eggs </div>
        </div>
      </form>
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
