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
const headers = { 'x-api-key': import.meta.env.VITE_CAT_API_KEY };

const DAILY_CAT_KEY = 'cats-guide:daily-cat';

function getTodayDate() {
  return new Date().toLocaleDateString('en-CA');
}

function loadCachedDailyCat() {
  try {
    const raw = localStorage.getItem(DAILY_CAT_KEY);
    if (!raw) return null;
    const cached = JSON.parse(raw);
    if (cached.date === getTodayDate()) return cached.cat;
    return null;
  } catch {
    return null;
  }
}

function saveDailyCat(cat) {
  try {
    localStorage.setItem(
      DAILY_CAT_KEY,
      JSON.stringify({ date: getTodayDate(), cat })
    );
  } catch {
    // storage quota exceeded or private browsing — degrade silently
  }
}

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

export function getDailyCat() {
  return async function (dispatch) {
    dispatch(asyncActionStart());
    try {
      const cached = loadCachedDailyCat();
      if (cached) {
        dispatch({ type: GET_RANDOM_IMAGE, payload: [cached] });
        dispatch(asyncActionFinish());
        return;
      }
      const response = await fetch(baseUrl + 'images/search', { headers });
      if (response.ok) {
        const data = await response.json();
        const { id, url, width, height } = data[0];
        saveDailyCat({ id, url, width, height });
        dispatch({ type: GET_RANDOM_IMAGE, payload: data });
      }
      dispatch(asyncActionFinish());
    } catch (error) {
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
      dispatch(asyncActionError(error));
    }
  };
}
