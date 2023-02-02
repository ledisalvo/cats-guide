import {
  GET_BREED_DETAILS,
  GET_CATS_BREEDS,
  GET_RANDOM_IMAGE,
} from './catBreedsConstats';

const initialState = {
  catsBreeds: [],
  randomCat: [],
};

const catsBreedsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_CATS_BREEDS:
      return {
        ...state,
        catsBreeds: payload,
      };
    case GET_RANDOM_IMAGE:
      return {
        ...state,
        randomCat: payload,
      };
    case GET_BREED_DETAILS:
      return {
        ...state,
        breedDetails: payload,
      };
    default:
      return state;
  }
};

export default catsBreedsReducer;
