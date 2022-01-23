import { combineReducers } from "redux";
import visibiltyFilters from "./visibilityFilter";
import todos from "./todos";

export default combineReducers({ todos, visibiltyFilters });
