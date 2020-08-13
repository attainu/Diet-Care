import recipeReducer from "./reducers/recipeReducer";
import userReducer from "./reducers/userReducer";
import { combineReducers } from "redux";
import mealplansReducer from "./reducers/mealplansReducer";
import recipeDetailReducer from "./reducers/recipeDetailReducer";

const rootReducer = combineReducers({
  recipesState: recipeReducer,
  userState: userReducer,
  mealplansState: mealplansReducer,
  recipeDetailState: recipeDetailReducer,
});

export default rootReducer;
