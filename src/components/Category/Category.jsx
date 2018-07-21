import React from 'react';
import PropTypes from 'prop-types';

const Category = (props) => {
  return (
    <button>{props.name}</button>
  );
};

Category.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Category;
