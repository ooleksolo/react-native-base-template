import { combineReducers } from '@reduxjs/toolkit';
import startReducer from './start';

const rootReducer = combineReducers([startReducer]);

export default rootReducer;
