import React from 'react';
import PropTypes from 'prop-types';

const Filter = ({ active, onClick, children }) => {
  if (active) {
    return <span>{children}</span>
  }

  return (
    <a
      href="#"
      onClick={(ev) => {
        ev.preventDefault();
        onClick();
      }}
    >
    {children}
    </a>
  )
};

Filter.propTypes = {
  active: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired
};

export default Filter;
