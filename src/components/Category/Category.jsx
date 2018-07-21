import React from 'react';
import PropTypes from 'prop-types';

const Category = (props) => {
  return (
    <p style={{ backgroundColor: props.color }}>{props.name}</p>
  );
};

Category.propTypes = {
  name: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
};

export default Category;
