import React from 'react';
import PropTypes from 'prop-types';
import Category from '../Category/Category';

const Categories = (props) => {
  return (
    <div>
      <h1>Categories</h1>
      <div>
        {props.categories.map((item, index) => <Category key={index} name={item.name} />)}
      </div>
    </div>
  );
};

Categories.propTypes = {
  categories: PropTypes.array.isRequired,
};

export default Categories;
