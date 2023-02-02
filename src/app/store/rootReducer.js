import { combineReducers } from '@reduxjs/toolkit';
import catsBreedsReducer from '../api/catsBreedReducer';
import asyncReducer from '../async/asyncReducer';

const rootReducer = combineReducers({
  cats: catsBreedsReducer,
  async: asyncReducer,
});

export default rootReducer;
