import { combineReducers } from 'redux';

// reducers
import booksReducer from './books';

export default combineReducers({
  books: booksReducer,
});
