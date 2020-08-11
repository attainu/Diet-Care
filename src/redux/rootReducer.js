import recipeReducer from "./reducers/recipeReducer";
import userReducer from "./reducers/userReducer";
import { combineReducers } from "redux";
import recipeDetailReducer from "./reducers/recipeDetailReducer";

const rootReducer = combineReducers({
  recipesState: recipeReducer,
  userState: userReducer,
  recipeDetailState: recipeDetailReducer
});

export default rootReducer;
