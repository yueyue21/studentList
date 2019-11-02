import {
  ADD_STUDENT,
  DELETE_STUDENT,
  EDIT_STUDENT,
  GET_STUDENTS,
  GET_STUDENT
} from "../actions/types";
import _ from "lodash";
export default (state = {}, action) => {
  // console.log(action);
  // console.log({ ...state, ..._.mapKeys(action.payload, "id") });
  switch (action.type) {
    case GET_STUDENTS:
      return { ...state, ..._.mapKeys(action.payload, "_id") };
    case EDIT_STUDENT:
      return { ...state, [action.payload._id]: action.payload };
    case ADD_STUDENT:
      return { ...state, [action.payload._id]: action.payload };
    case GET_STUDENT:
      return { ...state, [action.payload._id]: action.payload };
    case DELETE_STUDENT:
      return _.omit(state, action.payload);
    default:
      return state;
  }
};

//
// export default function postReducer(state = [], action) {
//   switch (action.type) {
//     case ADD_POST:
//       return [...state, action.payload];
//     case DELETE_POST:
//       return state.filter(post => post._id !== action.payload.id);
//       case FETCH_POST:
//       return action.posts;
//     default:
//       return state;
//   }
// }
