import { SET_SHOPPING_LIST_ITEM } from "../actionTypes";
import axios from "axios";
import keys from "../../config";

export const addItemtoShoppingList = (user, item) => {
  return async (dispatch) => {
    console.log(item, user);
    const { data } = axios.post(
      `${keys.BASE_URL}/mealplanner/${user.username}/shopping-list/items?apiKey=${keys.API_KEY}&hash=${user.hash}`,
      item
    );

    dispatch({
      type: SET_SHOPPING_LIST_ITEM,
      payload: data,
    });
  };
};
