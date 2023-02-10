import { combineReducers } from '@reduxjs/toolkit';
import catsBreedsReducer from '../api/catsBreedReducer';
import asyncReducer from '../async/asyncReducer';
import modalReducer from '../common/modals/modalReducer';

const rootReducer = combineReducers({
  cats: catsBreedsReducer,
  async: asyncReducer,
  modals: modalReducer,
});

export default rootReducer;
