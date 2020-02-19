import { createStore, combineReducers } from 'redux';
import recipe from './reducers/recipeReducer';
import recipeGallery from './reducers/recipeGalleryReducer';
import page from './reducers/pageReducer';

export default createStore(combineReducers({
  recipe,
  recipeGallery,
  page
}));