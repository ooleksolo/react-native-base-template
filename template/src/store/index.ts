import { configureStore } from '@reduxjs/toolkit';
import { isDevEnv } from '../helpers/env';
import rootReducer from './reducers';

const store = configureStore({
  reducer: rootReducer,
  devTools: isDevEnv,
});

export default store;
