import axios from "axios";
import { SET_RECIPE_DETAIL, SET_SIMILAR } from "../actionTypes";
import keys from "../../config";

export const fetchRecipeDetail = (recipeId) => {
  return async (dispatch) => {
    const { data } = await axios(
      `${keys.BASE_URL}/recipes/${recipeId}/information?apiKey=${keys.API_KEY}&includeNutrition=true`
    );
    console.log(
      data.nutrition.nutrients.filter((nutrient ) => {
        return nutrient;
      })
    );
    dispatch({
      type: SET_RECIPE_DETAIL,
      payload: data,
    });
  };
};

export const fetchSimilar = (recipeId) => {
  return async (dispatch) => {
    const { data } = await axios(
      `${keys.BASE_URL}/recipes/${recipeId}/similar?apiKey=${keys.API_KEY}
      `
    );
    dispatch({
      type: SET_SIMILAR,
      payload: data,
    });
  };
};
