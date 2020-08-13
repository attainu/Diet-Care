import axios from "axios";
import { SET_RECIPE_DETAIL, SET_SUBSTITUTE } from "../actionTypes";
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

export const fetchSubstitute = (ingrName) => {
  return async (dispatch) => {
    const { data } = await axios(
      `${keys.BASE_URL}/food/ingredients/substitutes?apiKey=${keys.API_KEY}&ingredientName=${ingrName}
      `
    );
    dispatch({
      type: SET_SUBSTITUTE,
      payload: data,
    });
  };
};
