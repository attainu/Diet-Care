import {
  SET_RECIPE_DETAIL,
  TOGGLE_RECIPE_DETAIL_FETCHING_STATE,
} from "../actionTypes";
const initialState = {
  recipeDetail: "",
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
    default:
      return state;
  }
};

export default recipeDetailReducer;
