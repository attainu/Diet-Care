import recipeReducer from "./reducers/recipeReducer";
import userReducer from "./reducers/userReducer";
import { combineReducers } from "redux";
import mealplansReducer from "./reducers/mealplansReducer";

const rootReducer = combineReducers({
  recipesState: recipeReducer,
  userState: userReducer,
  mealplansState: mealplansReducer,
});

export default rootReducer;
