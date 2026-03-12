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
const DAILY_CAT_CACHE_KEY = 'cats-guide:daily-cat';

function getTodayDate() {
  return new Date().toLocaleDateString('en-CA');
}

function readDailyCatCache() {
  try {
    const cachedValue = localStorage.getItem(DAILY_CAT_CACHE_KEY);

    if (!cachedValue) {
      return null;
    }

    const parsedCache = JSON.parse(cachedValue);
    if (!parsedCache || typeof parsedCache !== 'object') {
      return null;
    }

    if (!parsedCache.date || !parsedCache.cat) {
      return null;
    }

    return parsedCache;
  } catch (error) {
    return null;
  }
}

function writeDailyCatCache(cat) {
  try {
    localStorage.setItem(
      DAILY_CAT_CACHE_KEY,
      JSON.stringify({
        date: getTodayDate(),
        cat,
      })
    );
  } catch (error) {
    // Ignore storage failures and fall back to normal API behavior.
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

    const cachedDailyCat = readDailyCatCache();
    if (cachedDailyCat?.date === getTodayDate()) {
      dispatch({ type: GET_RANDOM_IMAGE, payload: [cachedDailyCat.cat] });
      dispatch(asyncActionFinish());
      return;
    }

    try {
      const response = await fetch(baseUrl + 'images/search', { headers });
      if (response.ok) {
        const data = await response.json();
        if (data[0]) {
          writeDailyCatCache(data[0]);
        }
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
