import {
  SET_RECIPES,
  SET_RECIPE_DETAIL,
  SET_SEARCH_VALUE,
  TOGGLE_RECIPES_FETCHING_STATE,
  TOGGLE_RECIPE_DETAIL_FETCHING_STATE,
  SET_AUTOCOMPLETE_RECIPES,
} from "../actionTypes";

const initialState = {
  searchValue: "",
  recipes: null,
  autocompleteRecipes: null,
  recipefetchingstate: false,
  recipeDetail: null,
  recipedetailfetchingstate: false,
};

const recipeReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case SET_RECIPES:
      return { ...state, recipes: payload };
    case SET_RECIPE_DETAIL:
      return { ...state, recipeDetail: payload };
    case SET_SEARCH_VALUE:
      return { ...state, searchValue: payload };
    case SET_AUTOCOMPLETE_RECIPES:
      return { ...state, autocompleteRecipes: payload };
    case TOGGLE_RECIPES_FETCHING_STATE:
      return { ...state, recipefetchingstate: !state.recipefetchingstate };
    case TOGGLE_RECIPE_DETAIL_FETCHING_STATE:
      return {
        ...state,
        recipedetailfetchingstate: !state.recipedetailfetchingstate,
      };
    default:
      return state;
  }
};

export default recipeReducer;
