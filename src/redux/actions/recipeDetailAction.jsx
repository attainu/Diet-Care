import axios from "axios"
import {
    SET_RECIPE_DETAIL
} from "../actionTypes"
import keys from "../../config"

export const fetchRecipeDetail = (recipeId) => {
    return async (dispatch) => {
        const {
            data
        } = await axios(
            `${keys.BASE_URL}/recipes/${recipeId}/information?apiKey=${keys.API_KEY}&includeNutrition=true`
        );
        console.log(data.title);
        dispatch({
            type: SET_RECIPE_DETAIL,
            payload: data,
        });
    };
};