import {
  SET_RECIPE_DETAIL,
  TOGGLE_RECIPE_DETAIL_FETCHING_STATE,
  SET_SUBSTITUTE
} from "../actionTypes";
const initialState = {
  recipeDetail: "",
  substitute: "",
  isFetchingRecipeDetail: false,
};

const recipeDetailReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case SET_RECIPE_DETAIL:
      return { ...state, recipeDetail: payload };
    case TOGGLE_RECIPE_DETAIL_FETCHING_STATE:
      return {
        ...state,
        isFetchingRecipeDetail: !state.isFetchingRecipeDetail,
      };
      case SET_SUBSTITUTE: return {...state, substitute:payload}
    default:
      return state;
  }
};

export default recipeDetailReducer;
