import useFetch from '../../services/useFetch';
import {
  asyncActionError,
  asyncActionFinish,
  asyncActionStart,
} from '../async/asyncReducer';
import {
  GET_BREED_DETAILS,
  GET_CATS_BREEDS,
  GET_RANDOM_IMAGE,
} from './catBreedsConstats';

const baseUrl = 'https://api.thecatapi.com/v1/';
const headers = { 'x-api-key': 'c2db22b7-52b8-4f16-82db-c0cbb4d39136' };

export function getCatsBreeds() {
  return async function (dispatch) {
    dispatch(asyncActionStart());
    try {
      const response = await fetch(baseUrl + 'breeds', { headers });
      if (response.ok) {
        const data = await response.json();
        dispatch({ type: GET_CATS_BREEDS, payload: data });
      }
      dispatch(asyncActionFinish());
    } catch (error) {
      dispatch(asyncActionError(error));
    }
  };
}

export function getRandomImage() {
  return async function (dispatch) {
    dispatch(asyncActionStart());
    try {
      const response = await fetch(baseUrl + 'images/search', { headers });
      if (response.ok) {
        const data = await response.json();
        dispatch({ type: GET_RANDOM_IMAGE, payload: data });
      }
      dispatch(asyncActionFinish());
    } catch (error) {
      console.log('error: ' + error);
      dispatch(asyncActionError(error));
    }
  };
}

export function getBreedDetails(name) {
  return async function (dispatch) {
    dispatch(asyncActionStart());
    try {
      const response = await fetch(baseUrl + `breeds/search?q=${name}`, {
        headers,
      });
      if (response.ok) {
        const data = await response.json();
        dispatch({ type: GET_BREED_DETAILS, payload: data });
      }
      dispatch(asyncActionFinish());
    } catch (error) {
      console.log('error: ' + error);
      dispatch(asyncActionError(error));
    }
  };
}
