import React from 'react';
import PropTypes from 'prop-types';
import Todo from './Todo';

const TodoList = ({todos, onClickTodo}) => {
  return (
  <ul>
    {
      todos.map(item => (
        <Todo
          key={item.id}
          onClick={() => onClickTodo(item.id)}
          {...item}
        />
      ))
    }
  </ul>
)};

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired
  })).isRequired,
  onClickTodo: PropTypes.func.isRequired
};

export default TodoList;
