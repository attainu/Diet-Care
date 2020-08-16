import {
  SET_USER,
  TOGGLE_USER_FETCHING_STATE,
  LOGOUT_USER,
} from "../actionTypes";
import axios from "axios";
import key from "../../config";

export const userSignup = (userData) => {
  return async (dispatch) => {
    dispatch({
      type: TOGGLE_USER_FETCHING_STATE,
    });
    const { data } = await axios.post(
      `https://api.spoonacular.com/users/connect?apiKey=${key.API_KEY}`,
      userData
    );
    localStorage.setItem("user", JSON.stringify(data));
    dispatch({
      type: SET_USER,
      payload: data,
    });
  };
};

export const userLogin = (userData) => {
  return async (dispatch) => {
    localStorage.setItem("user", JSON.stringify(userData));
    dispatch({
      type: SET_USER,
      payload: userData,
    });
  };
};

export const userLogout = () => {
  return async (dispatch) => {
    localStorage.removeItem("user");
    dispatch({
      type: LOGOUT_USER,
    });
  };
};
