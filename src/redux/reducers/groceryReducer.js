import {
  SET_GROCERY_ITEMS,
  TOGGLE_GROCER_ITEMS_FETCHING_STATE,
  SET_AUTOCOMPLETE_GROCERY_ITEMS,
} from "../actionTypes";
const initialState = {
  searchitemResults: null,
  resultFetchingState: false,
  suggestionList: null,
};

const groceryReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case SET_GROCERY_ITEMS:
      return { ...state, searchitemResults: payload };
    case SET_AUTOCOMPLETE_GROCERY_ITEMS:
      return { ...state, suggestionList: payload };
    case TOGGLE_GROCER_ITEMS_FETCHING_STATE:
      return { ...state, resultFetchingState: !state.resultFetchingState };
    default:
      return state;
  }
};

export default groceryReducer;
