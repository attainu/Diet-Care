import { SET_SHOPPING_LIST_ITEM } from "../actionTypes";
import axios from "axios";
import keys from "../../config";

export const addItemtoShoppingList = (user, item) => {
  return async () => {
    console.log(item, user);
    const { data } = await axios.post(
      `${keys.BASE_URL}/mealplanner/${user.username}/shopping-list/items?apiKey=${keys.API_KEY}&hash=${user.hash}`,
      item
    );
    console.log(data);
  };
};
