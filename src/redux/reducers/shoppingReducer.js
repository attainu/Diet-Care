import {
  SET_SHOPPING_LIST_ITEM,
  SET_SHOPPING_LIST_ITEM_DETAIL,
} from "../actionTypes";
const initialState = {
  shoppingListItems: null,
  itemDetail: null,
};

const shoppingReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case SET_SHOPPING_LIST_ITEM:
      return { ...state, shoppingListItems: payload };
    case SET_SHOPPING_LIST_ITEM_DETAIL:
      return { ...state, itemDetail: payload };
    default:
      return state;
  }
};

export default shoppingReducer;
