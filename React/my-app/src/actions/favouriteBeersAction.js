import { fetchBeerById } from "../services/beerService";
import {
  ADD_FAVOURITE_BEER,
  REMOVE_FAVOURITE_BEER,
  ERROR_FETCHING_BEER,
} from "../constants/actions";

export const modifyError = (payload) => {
  return { type: ERROR_FETCHING_BEER, payload };
};

export const addBeer = (payload) => {
  return { type: ADD_FAVOURITE_BEER, payload };
};

export const addFavouriteBeer = (favouriteBeer) => {
  // return { type: ADD_FAVOURITE_BEER, payload: favouriteBeer };
  return async (dispatch) => {
    try {
      await fetchBeerById(favouriteBeer.id % 2 ? favouriteBeer.id : "jpt");

      dispatch(addBeer(favouriteBeer));
      dispatch(modifyError(null));
    } catch (error) {
      const errorMsg = error.response.data.data[0].msg;

      dispatch(modifyError(errorMsg));
    }
  };
};

export const removeFavouriteBeer = (favouriteBeerId) => {
  return { type: REMOVE_FAVOURITE_BEER, payload: favouriteBeerId };
};