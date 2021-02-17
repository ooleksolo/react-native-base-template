import { createReducer } from '@reduxjs/toolkit';
import { StartActionCreator } from '../actions/start';

const initialState = {
  start: false,
};

const startReducer = createReducer(initialState, (builder) => {
  builder.addCase(StartActionCreator, (state) => ({
    ...state,
    start: true,
  }));
});

export type StartState = typeof initialState;

export default startReducer;
