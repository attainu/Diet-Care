import recipeReducer from "./reducers/recipeReducer";
import userReducer from "./reducers/userReducer";
import { combineReducers } from "redux";
import mealplansReducer from "./reducers/mealplansReducer";
import recipeDetailReducer from "./reducers/recipeDetailReducer";
import groceryReducer from "./reducers/groceryReducer";
import shoppingReducer from "./reducers/shoppingReducer";

const rootReducer = combineReducers({
  recipesState: recipeReducer,
  userState: userReducer,
  mealplansState: mealplansReducer,
  recipeDetailState: recipeDetailReducer,
  substitute: recipeDetailReducer,
  grocerState: groceryReducer,
  shoppingState: shoppingReducer,
});

export default rootReducer;
