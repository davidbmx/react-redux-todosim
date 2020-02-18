import React, { Component } from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers';
import Hello from './Hello';
import TodoFormInput from './containers/TodoFormInput';
import TodoListVisible from './containers/TodoListVisible';
import FilterLink from './containers/FilterLink';
import { SHOW_ALL, SHOW_TOGGLE, SHOW_VISIBLE } from './constants';
import './style.css';

const store = createStore(reducers);


class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React'
    };
  }

  render() {
    return (
      <div>
        <Hello name={this.state.name} />
        <TodoFormInput />
        <TodoListVisible />
        <FilterLink filter={SHOW_ALL}>
          View All
        </FilterLink>
        { ' ' }
        <FilterLink filter={SHOW_TOGGLE}>
          View toggle
        </FilterLink>
        { ' ' }
        <FilterLink filter={SHOW_VISIBLE}>
          View visible
        </FilterLink>
      </div>
    );
  }
}

render(
  <Provider store={store}>
    <App />
  </Provider>, document.getElementById('root'));
