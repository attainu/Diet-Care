import {
  SET_GROCERY_ITEMS,
  TOGGLE_GROCER_ITEMS_FETCHING_STATE,
  SET_AUTOCOMPLETE_GROCERY_ITEMS,
} from "../actionTypes";
import axios from "axios";
import keys from "../../config";

export const fetchGroceryProducts = (seachQuery) => {
  return async (disapatch) => {
    disapatch({
      type: TOGGLE_GROCER_ITEMS_FETCHING_STATE,
    });
    const { data } = await axios(
      `${keys.BASE_URL}/food/products/search?query=${seachQuery}&apiKey=${keys.API_KEY}`
    );
    console.log(data);
    disapatch({
      type: TOGGLE_GROCER_ITEMS_FETCHING_STATE,
    });
    disapatch({
      type: SET_GROCERY_ITEMS,
      payload: data,
    });
  };
};

export const fetchGroceryProductsSuggestions = (seachQuery) => {
  return async (disapatch) => {
    const { data } = await axios(
      `${keys.BASE_URL}/food/products/suggest?query=${seachQuery}&apiKey=${keys.API_KEY}`
    );
    console.log(data);

    disapatch({
      type: SET_AUTOCOMPLETE_GROCERY_ITEMS,
      payload: data,
    });
  };
};
