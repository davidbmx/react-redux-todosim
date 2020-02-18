import { TOGGLE_TODO, ADD_TODO, SET_VISIBLE_FILTER } from '../constants';

export const toggleTodo = (id) => {
  return {
    type: TOGGLE_TODO,
    payload: id
  };
};

export const addTodo = (text) => {
  return {
    type: ADD_TODO,
    payload: {
      id: Date.now(),
      completed: false,
      text
    }
  };
};

export const setVisibleFilter = (filter) => {
  return {
    type: SET_VISIBLE_FILTER,
    payload: filter
  };
};
