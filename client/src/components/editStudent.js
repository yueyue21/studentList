import React, { Component } from "react";
import StudentForm from "./studentForm";
import { editStudent, getStudent } from "../actions";
import { connect } from "react-redux";
class AddStudent extends Component {
  componentDidMount() {
    this.props.getStudent(this.props.match.params.id);
  }
  onSubmit = formValues => {
    this.props.editStudent(this.props.match.params.id, formValues);
  };

  render() {
    if (!this.props.currentStudent) {
      return <div>Loading...</div>;
    }
    return (
      <div className="container">
        <h2>Update a Student Info</h2>
        <StudentForm
          onSubmit={this.onSubmit}
          initialValues={{
            firstName: `${this.props.currentStudent.firstName}`,
            lastName: `${this.props.currentStudent.lastName}`,
            status: `${this.props.currentStudent.status}`,
            phoneNumber: `${this.props.currentStudent.phoneNumber}`
          }}
        />
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return { currentStudent: state.students[ownProps.match.params.id] };
};
export default connect(
  mapStateToProps,
  { editStudent, getStudent }
)(AddStudent);
