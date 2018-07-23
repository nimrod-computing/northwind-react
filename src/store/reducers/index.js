import { combineReducers } from 'redux';
import categoriesReducer from './categoriesReducer';

export const rootReducer = combineReducers({
    categories: categoriesReducer
});

export const initialState = {
    categories: []
};
