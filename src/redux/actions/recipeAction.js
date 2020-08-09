import axios from "axios";
import {
  SET_RECIPES,
  SET_AUTOCOMPLETE_RECIPES,
  SET_SEARCH_VALUE,
} from "../actionTypes";
import keys from "../../config";

export const fetchRecipes = (searchquery) => {
  return async (dispatch) => {
    setSearchValue(searchquery);
    const { data } = await axios(
      `${keys.BASE_URL}/recipes/complexSearch?apiKey=${keys.API_KEY}&number=10&query=${searchquery}`
    );
    console.log(data);
    dispatch({
      type: SET_RECIPES,
      payload: data,
    });
  };
};

export const fetchautocompleteRecipes = (searchquery) => {
  return async (dispatch) => {
    const { data } = await axios(
      `${keys.BASE_URL}/recipes/autocomplete?apiKey=${keys.API_KEY}&number=10&query=${searchquery}`
    );
    console.log(data);
    dispatch({
      type: SET_AUTOCOMPLETE_RECIPES,
      payload: data,
    });
  };
};

export const setSearchValue = (searchValue) => {
  return (dispatch) => {
    dispatch({
      type: SET_SEARCH_VALUE,
      payload: searchValue,
    });
  };
};
export const fetchRecipesbyDiet = (searchquery, diet) => {
  return async (dispatch) => {
    const { data } = await axios(
      `${keys.BASE_URL}/recipes/complexSearch?apiKey=${keys.API_KEY}&query=${searchquery}&diet=${diet}`
    );
    console.log(data);
    dispatch({
      type: SET_RECIPES,
      payload: data,
    });
  };
};

export const fetchRecipesbyCalorie = (searchquery, minCalorie, maxCalorie) => {
  return async (dispatch) => {
    try {
      console.log(maxCalorie);
      const { data } = await axios(
        `${keys.BASE_URL}/recipes/complexSearch?apiKey=${keys.API_KEY}&query=${searchquery}&minCalories=${minCalorie}&maxCalories=${maxCalorie}`
      );
      console.log(data);
      dispatch({
        type: SET_RECIPES,
        payload: data,
      });
    } catch (error) {
      alert(error);
    }
  };
};

export const fetchRecipesbyIntolerances = (searchquery, intolrenceArray) => {
  return async (dispatch) => {
    try {
      const { data } = await axios(
        `${keys.BASE_URL}/recipes/complexSearch?apiKey=${
          keys.API_KEY
        }&query=${searchquery}&intolerances=${intolrenceArray.join()}`
      );
      console.log(data);
      dispatch({
        type: SET_RECIPES,
        payload: data,
      });
    } catch (error) {
      alert(error);
    }
  };
};

export const fetchRecipesbymaxreadyTime = (searchquery, time) => {
  return async (dispatch) => {
    try {
      const { data } = await axios(
        `${keys.BASE_URL}/recipes/complexSearch?apiKey=${keys.API_KEY}&query=${searchquery}&maxReadyTime=${time}`
      );
      console.log(data);
      dispatch({
        type: SET_RECIPES,
        payload: data,
      });
    } catch (error) {
      alert(error);
    }
  };
};

export const fetchRecipesbyNutrients = (
  searchquery,
  minP,
  maxP,
  minC,
  maxC,
  minF,
  maxF
) => {
  return async (dispatch) => {
    try {
      const { data } = await axios(
        `${keys.BASE_URL}/recipes/complexSearch?apiKey=${keys.API_KEY}&query=${searchquery}&minProtein=${minP}&maxProtein=${maxP}&minCarbs=${minC}&maxCarbs=${maxC}&minFat=${minF}&maxFat=${maxF}`
      );
      console.log(data);
      dispatch({
        type: SET_RECIPES,
        payload: data,
      });
    } catch (error) {
      alert(error);
    }
  };
};
