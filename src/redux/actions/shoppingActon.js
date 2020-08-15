import {
  SET_SHOPPING_LIST_ITEM,
  SET_SHOPPING_LIST_ITEM_DETAIL,
} from "../actionTypes";
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

export const getShoppingList = (user) => {
  return async (dispatch) => {
    const { data } = await axios(
      `${keys.BASE_URL}/mealplanner/${user.username}/shopping-list?apiKey=${keys.API_KEY}&hash=${user.hash}`
    );
    console.log(data);
    dispatch({
      type: SET_SHOPPING_LIST_ITEM,
      payload: data,
    });
  };
};

export const deleteShoppingList = (user, id) => {
  return async () => {
    const { data } = await axios.delete(
      `${keys.BASE_URL}/mealplanner/${user.username}/shopping-list/items/${id}?hash=${user.hash}&apiKey=${keys.API_KEY}`
    );
  };
};

export const getShoppingListitemDetail = (itemid) => {
  return async (dispatch) => {
    const { data } = await axios(
      `${keys.BASE_URL}/food/products/${itemid}?apiKey=${keys.API_KEY}`
    );
    console.log(data);
    dispatch({
      type: SET_SHOPPING_LIST_ITEM_DETAIL,
      payload: data,
    });
  };
};
