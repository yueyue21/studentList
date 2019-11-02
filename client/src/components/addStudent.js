import React, { Component } from "react";
import StudentForm from "./studentForm";
import { addStudent } from "../actions";
import { connect } from "react-redux";
class AddStudent extends Component {
  onSubmit = formValues => {
    this.props.addStudent(formValues);
  };

  render() {
    return (
      <div className="container">
        <h2>Add a Student</h2>
        <StudentForm onSubmit={this.onSubmit} />
      </div>
    );
  }
}

export default connect(
  null,
  { addStudent }
)(AddStudent);
