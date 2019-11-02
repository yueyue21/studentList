import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";

class StudentForm extends Component {
  onSubmit = formValues => {
    this.props.submit(formValues);
  };

  render() {
    return (
      <form onSubmit={this.props.handleSubmit(this.onSubmit)}>
        <div className="form-group ">
          <label htmlFor="firstName" className="col-sm-2 col-form-label">
            First Name
          </label>
          <Field
            name="firstName"
            component="input"
            type="text"
            placeholder="First Name"
            label="First Name"
            className="col-sm-6 form-control"
            required
          />
        </div>
        <div className="form-group ">
          <label htmlFor="lastName" className="col-sm-2 col-form-label">
            Last Name
          </label>
          <Field
            name="lastName"
            component="input"
            type="text"
            placeholder="Last Name"
            className="col-sm-6 form-control"
            required
          />
        </div>
        <div className="form-group ">
          <label htmlFor="phoneNumber" className="col-sm-2 col-form-label">
            Phone Number
          </label>
          <Field
            name="phoneNumber"
            component="input"
            type="number"
            placeholder="Phone Number"
            className="col-sm-6 form-control"
            required
          />
        </div>

        <div className="form-group ">
          <div className="">
            <legend htmlFor="status" className="col-form-label col-sm-2 ">
              Status
            </legend>

            <div className="col-sm-9 ">
              <div className="form-check ">
                <Field
                  name="status"
                  component="input"
                  type="radio"
                  value="active"
                  className="form-check-input "
                  required
                />

                <label>Active</label>
              </div>

              <div className="form-check ">
                <Field
                  name="status"
                  component="input"
                  type="radio"
                  value="delinquent"
                  className="form-check-input "
                />

                <label>Delinquent</label>
              </div>

              <div className="form-check ">
                <Field
                  name="status"
                  component="input"
                  type="radio"
                  value="dropped"
                  className="form-check-input "
                />
                {"  "}
                <label>Dropped</label>
              </div>
            </div>
          </div>
        </div>

        <button type="submit" className="btn btn-secondary ">
          Submit
        </button>
      </form>
    );
  }
}

export default reduxForm({ form: "studentForm" })(StudentForm);
