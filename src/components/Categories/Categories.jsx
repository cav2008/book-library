import React from 'react';
import PropTypes from 'prop-types';
import Category from '../../store/containers/Category';

import styles from './Categories.scss';

const Categories = (props) => {
  return (
    <div className={styles.categories}>
      <h1>Categories</h1>
      <div>
        {props.categories.map((item, index) => {
          return (
            <Category
              key={index}
              category={item}
            />
          );
        })}
      </div>
    </div>
  );
};

Categories.propTypes = {
  categories: PropTypes.array.isRequired,
};

export default Categories;
