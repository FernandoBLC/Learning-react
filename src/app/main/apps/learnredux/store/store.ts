import {combineReducers} from '@reduxjs/toolkit';
import todosReducer from './todoSlice.ts';

export const learnreduxReducers = combineReducers({
    testTodoApp: todosReducer,
});