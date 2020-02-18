import React, { useState } from 'react';
import PropTypes from 'prop-types';

const TodoForm = (props) => {
  const [text, setText] = useState('');

  const handleKeyUp = (ev) => {
    if (ev.key === 'Enter' && text !== '') {
      props.onKeyPress(text);
      setText('');
    }
  }

  return (
    <input
      type="text"
      onChange={(ev) => setText(ev.target.value)}
      value={text}
      onKeyPress={handleKeyUp}
    />
  )
};

TodoForm.propTypes = {
  onKeyPress: PropTypes.func.isRequired
};

export default TodoForm;
