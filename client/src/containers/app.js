import React, { Component } from "react";
import { connect } from "react-redux";
import { getStudents } from "../actions";
import { Link } from "react-router-dom";
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      numberOfRecords: 5
    };

    this.handleDisplayRecords = this.handleDisplayRecords.bind(this);
  }

  componentDidMount() {
    this.props.getStudents();
  }

  handleDisplayRecords(e) {
    this.setState({ numberOfRecords: e.target.value });
  }

  renderDropDown() {
    return (
      <select
        value={this.state.selectValue}
        onChange={this.handleDisplayRecords}
        className="ui  dropdown"
      >
        <option value="5" className="item">
          Show 5 for each
        </option>
        <option value="10" className="item">
          Show 10 for each
        </option>
        <option value="20" className="item">
          Show 20 for each
        </option>
      </select>
    );
  }

  renderActiveColumn() {
    let counter = 0;
    return this.props.students.map(student => {
      if (student.status === "active") {
        counter += 1;
      }
      if (
        counter <= this.state.numberOfRecords &&
        student.status === "active"
      ) {
        return (
          <div
            to={`/edit/${student._id}`}
            className="card"
            style={{ borderColor: "Green", margin: "5px" }}
            key={student._id}
          >
            <ul className="list-group  ">
              <Link to={`/edit/${student._id}`}>
                <li className="list-group-item ">
                  <i className="user icon" />
                  {student.firstName} {student.lastName}
                </li>
                <li className="list-group-item">
                  <i className="id card icon" />
                  {student._id}
                </li>
                <li className="list-group-item">
                  <i className="phone icon" /> {student.phoneNumber}
                </li>
              </Link>
              <li className="list-group-item">
                <Link
                  to={`/delete/${student._id}`}
                  className="right floated content button ui negative"
                >
                  Delete
                </Link>
              </li>
            </ul>
          </div>
        );
      }
      return null;
    });
  }
  renderDelinquentColumn() {
    let counter = 0;
    return this.props.students.map(student => {
      if (student.status === "delinquent") {
        counter += 1;
      }
      if (
        counter <= this.state.numberOfRecords &&
        student.status === "delinquent"
      ) {
        return (
          <div
            className="card"
            style={{ borderColor: "Orange", margin: "5px" }}
            key={student._id}
          >
            <ul className="list-group  ">
              <Link to={`/edit/${student._id}`}>
                <li className="list-group-item ">
                  <i className="user icon" />
                  {student.firstName} {student.lastName}
                </li>
                <li className="list-group-item">
                  <i className="id card icon" />
                  {student._id}
                </li>
                <li className="list-group-item">
                  <i className="phone icon" />
                  {student.phoneNumber}
                </li>
              </Link>
              <li className="list-group-item">
                <Link
                  to={`/delete/${student._id}`}
                  className="right floated content button ui negative"
                >
                  Delete
                </Link>
              </li>
            </ul>
          </div>
        );
      }
      return null;
    });
  }

  renderDroppedColumn() {
    let counter = 0;
    return this.props.students.map(student => {
      if (student.status === "dropped") {
        counter += 1;
        // console.log(counter);
      }
      if (
        counter <= this.state.numberOfRecords &&
        student.status === "dropped"
      ) {
        return (
          <div
            className="card"
            style={{ borderColor: "Red", margin: "5px" }}
            key={student._id}
          >
            <ul className="list-group  ">
              <Link to={`/edit/${student._id}`}>
                <li className="list-group-item ">
                  <i className="user icon" />
                  {student.firstName} {student.lastName}
                </li>
                <li className="list-group-item">
                  <i className="id card icon" />
                  {student._id}
                </li>
                <li className="list-group-item">
                  <i className="phone icon" />
                  {student.phoneNumber}
                </li>
              </Link>
              <li className="list-group-item">
                <Link
                  to={`/delete/${student._id}`}
                  className="right floated content button ui negative"
                >
                  Delete
                </Link>
              </li>
            </ul>
          </div>
        );
      }
      return null;
    });
  }
  renderHeaderActive() {
    return (
      <div>
        <div
          style={{
            textAlign: "center",
            padding: "25px",
            backgroundColor: "#ABEBC6",
            marginTop: "5px"
          }}
        >
          <h4>Active</h4>
        </div>
      </div>
    );
  }
  renderHeaderDelinquent() {
    return (
      <div>
        <div
          style={{
            textAlign: "center",
            padding: "25px",
            backgroundColor: "#FAD7A0",
            marginTop: "5px"
          }}
        >
          <h4>Delinquent</h4>
        </div>
      </div>
    );
  }
  renderHeaderDropped() {
    return (
      <div>
        <div
          style={{
            textAlign: "center",
            padding: "25px",
            backgroundColor: "#F1948A",
            marginTop: "5px"
          }}
        >
          <h4>Dropped</h4>
        </div>
      </div>
    );
  }
  renderLists() {
    return (
      <div className="ui container">
        <div className="col-4" style={{ float: "left", padding: "0px" }}>
          {this.renderHeaderActive()}
          {this.renderActiveColumn()}
        </div>
        <div className="col-4 " style={{ float: "left" }}>
          {this.renderHeaderDelinquent()}
          {this.renderDelinquentColumn()}
        </div>
        <div className="col-4" style={{ float: "left" }}>
          {this.renderHeaderDropped()}
          {this.renderDroppedColumn()}
        </div>
      </div>
    );
  }

  render() {
    return (
      <div style={{ backgroundColor: "#fff" }}>
        <div className="container">
          <h2>Home</h2>
          <div style={{ marginLeft: "85%", marginBottom: "5px" }}>
            {this.renderDropDown()}
          </div>
          <Link style={{ marginLeft: "85%" }} to="/addStudent">
            <button className=" ui teal button">
              <i className="plus large icon" />
              Add a student
            </button>
          </Link>
          <div>{this.renderLists()}</div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  // console.log(state);
  return { students: Object.values(state.students) };
};

export default connect(
  mapStateToProps,
  { getStudents }
)(App);
