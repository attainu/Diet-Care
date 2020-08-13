import axios from "axios";
import { SET_MEALPLANS, SET_MEALPLAN_TEMPLATE } from "../actionTypes";
import keys from "../../config";

export const fetchMealplantemplates = () => {
  return async (dispatch) => {
    const { data } = await axios(
      `${keys.BASE_URL}/mealplanner/public-templates/?apiKey=${keys.API_KEY}`
    );
    console.log(data);
    dispatch({
      type: SET_MEALPLAN_TEMPLATE,
      payload: data,
    });
  };
};

export const addMealplans = (user, template) => {
  return async (dispatch) => {
    console.log(template, user);
    const { data } = await axios.post(
      `${keys.BASE_URL}/mealplanner/${user.username}/items?hash=${user.hash}&apiKey=${keys.API_KEY}`,
      template
    );
    console.log(data);
    dispatch({
      type: SET_MEALPLANS,
      payload: data,
    });
  };
};

// export const addMealplans = (user, template) => {
//   return async (dispatch) => {
//     console.log(template, user);
//     const { data } = await axios.post(
//       `${keys.BASE_URL}/mealplanner/${user.username}/items?hash=${user.hash}&apiKey=${keys.API_KEY}`,
//       template
//     );
//     console.log(data);
//     dispatch({
//       type: SET_MEALPLANS,
//       payload: data,
//     });
//   };
// };

export const setMealplans = (user, date) => {
  return async (dispatch) => {
    console.log(user, date);
    const { data } = await axios(
      `${keys.BASE_URL}/mealplanner/${user.username}/week/${date}?hash=${user.hash}&apiKey=${keys.API_KEY}`
    );
    console.log(data);
    dispatch({
      type: SET_MEALPLANS,
      payload: data,
    });
  };
};
