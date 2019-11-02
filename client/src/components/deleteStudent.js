import React, { Component } from "react";
import Modal from "./modal";
import { connect } from "react-redux";
import { deleteStudent, getStudent } from "../actions";
import { Link } from "react-router-dom";
import history from "../history";

class DeleteStudent extends Component {
  componentDidMount() {
    this.props.getStudent(this.props.match.params.id);
  }

  renderActions() {
    const id = this.props.match.params.id;
    return (
      <React.Fragment>
        <button
          onClick={() => this.props.deleteStudent(id)}
          className="ui red button"
        >
          Delete
        </button>
        <Link to="/" className="ui teal button">
          Cancel
        </Link>
      </React.Fragment>
    );
  }
  renderContent() {
    if (!this.props.currentStudent) {
      return "Do you want to delete this stream?";
    }
    return `Do you want to delete this stream with title: ${this.props.currentStudent.firstName}${this.props.currentStudent.lastName} ?`;
  }

  render() {
    return (
      <Modal
        title="Delete Stream"
        content={this.renderContent()}
        actions={this.renderActions()}
        onDismiss={() => history.push("/")}
      />
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return { currentStudent: state.students[ownProps.match.params.id] };
};

export default connect(
  mapStateToProps,
  { getStudent, deleteStudent }
)(DeleteStudent);
