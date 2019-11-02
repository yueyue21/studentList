import React from "react";
import { Provider } from "react-redux";
import { Route, Router } from "react-router-dom";
import App from "./app";
import AddStudent from "../components/addStudent";
import EditStudent from "../components/editStudent";
import DeleteStudent from "../components/deleteStudent";
import history from "../history";
const Root = ({ store }) => (
  <Provider store={store}>
    <Router history={history}>
      <div>
        <Route path="/addstudent" exact={true} component={AddStudent} />
        <Route path="/" exact={true} component={App} />
        <Route path="/edit/:id" exact={true} component={EditStudent} />
        <Route path="/delete/:id" exact={true} component={DeleteStudent} />
      </div>
    </Router>
  </Provider>
);

export default Root;
