import { ADD_TODO, TOGGLE_TODO, SET_VISIBLE_FILTER } from '../constants';
const INITIAL_STATE = {
  todos: [],
  visibleFilter: 'SHOW_ALL'
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, action.payload]
      };
    case TOGGLE_TODO:
      return {
        ...state,
        todos: state.todos.map(item => {
          if (item.id === action.payload) {
            return {
              ...item,
              completed: !item.completed
            };
          }
          return item;
        })
      };
    case SET_VISIBLE_FILTER:
      return {
       ...state,
       visibleFilter: action.payload 
      };
    default:
      return state;
  }
};
