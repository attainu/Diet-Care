import recipeReducer from "./reducers/recipeReducer";
import userReducer from "./reducers/userReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  recipesState: recipeReducer,
  userState: userReducer,
});

export default rootReducer;
