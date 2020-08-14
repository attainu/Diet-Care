import { SET_SHOPPING_LIST_ITEM } from "../actionTypes";
import axios from "axios";
import keys from "../../config";
export const addItemtoShoppingList = (user, item) => {
  return async (dispatch) => {
    const { data } = axios.post(
      `${keys.BASE_URL}/mealplanner/${user.username}/shopping-list/items`,
      item
    );

    console.log(data);
  };
};
