import {
  ADD_STUDENT,
  DELETE_STUDENT,
  EDIT_STUDENT,
  GET_STUDENT,
  GET_STUDENTS
} from "./types";
import history from "../history";
import axios from "axios";
const baseUrl = "http://localhost:3001";

export const addStudent = formValues => async dispatch => {
  const response = await axios.post(`${baseUrl}/students`, formValues);
  //It seems we do not need to update the state by dispatching an action since
  //after visit "/" the state will go with the getStudents action creator
  //which will update the state from the api.
  //But!!! the actuall key fetched from the api will be treated as a duplicated key
  // state propery. Please update by dispatch
  //To be investigated..............
  dispatch({ type: ADD_STUDENT, payload: response.data });
  if (response.data) {
    history.push("/");
  } else {
    console.log(response);
  }
};

export const getStudents = () => async dispatch => {
  const response = await axios.get(`${baseUrl}/students`);
  // console.log(response);
  dispatch({ type: GET_STUDENTS, payload: response.data });
};
export const getStudent = id => async dispatch => {
  const response = await axios.get(`${baseUrl}/students/${id}`);
  // console.log(response);
  dispatch({ type: GET_STUDENT, payload: response.data });
};

export const editStudent = (id, formValues) => async dispatch => {
  const response = await axios.put(`${baseUrl}/students/${id}`, formValues);
  //console.log(response);
  dispatch({ type: EDIT_STUDENT, payload: response.data });
  if (response.data) {
    history.push("/");
  } else {
    console.log(response);
  }
};

export const deleteStudent = id => async dispatch => {
  await axios.delete(`${baseUrl}/students/${id}`);
  //console.log(response);
  dispatch({ type: DELETE_STUDENT, payload: id });
  history.push("/");
};
