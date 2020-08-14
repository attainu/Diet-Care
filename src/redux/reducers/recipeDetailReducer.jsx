import {
  SET_RECIPE_DETAIL,
  TOGGLE_RECIPE_DETAIL_FETCHING_STATE,
  SET_SIMILAR
} from "../actionTypes";
const initialState = {
  recipeDetail: "",
  similar: "",
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
      case SET_SIMILAR: return {...state, similar:payload}
    default:
      return state;
  }
};

export default recipeDetailReducer;
