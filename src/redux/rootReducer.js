import recipeReducer from "./reducers/recipeReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  recipesState: recipeReducer,
});

export default rootReducer;
