import { SET_SHOPPING_LIST_ITEM } from "../actionTypes";
const initialState = {
  shoppingListItems: null,
};

const shoppingReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case SET_SHOPPING_LIST_ITEM:
      return { ...state, shoppingListItems: payload };
    default:
      return state;
  }
};

export default shoppingReducer;
