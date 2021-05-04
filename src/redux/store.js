// import { combineReducers } from 'redux';

import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import contactsReducer from './contact-form/contacts-reducer';
import logger from 'redux-logger';

// const rootReducer = combineReducers({
//   contacts: contactsReducer,
// });

// const store = createStore(rootReducer, composeWithDevTools());

const middleware = [...getDefaultMiddleware(), logger];

const store = configureStore({
  reducer: {
    contacts: contactsReducer,
  },
  middleware,
  devTools: process.env.NODE_ENV === 'development',
});

export default store;
