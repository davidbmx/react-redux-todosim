import { connect } from 'react-redux';
import { SHOW_ALL, SHOW_TOGGLE, SHOW_VISIBLE } from '../constants';
import TodoList from '../components/TodoList';
import { toggleTodo } from '../actions';

const getTodos = (todos, visibleFilter) => {
  switch (visibleFilter) {
    case SHOW_ALL:
      return todos;
    case SHOW_TOGGLE:
      return todos.filter(t => t.completed);
    case SHOW_VISIBLE:
      return todos.filter(t => !t.completed);
  }
}

const mapStateToProps = (state) => ({
  todos: getTodos(state.todos, state.visibleFilter)
});

const mapDispatchToProps = (dispatch) => ({
  onClickTodo: (id) => {
    dispatch(toggleTodo(id))
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);
