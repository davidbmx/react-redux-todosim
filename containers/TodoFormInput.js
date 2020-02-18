import { connect } from 'react-redux';
import { addTodo } from '../actions';
import TodoForm from '../components/TodoForm';

const mapDispatchToProps = (dispatch) => ({
  onKeyPress: (text) => {
    dispatch(addTodo(text));
  }
});

export default  connect(
  null,
  mapDispatchToProps
)(TodoForm);
