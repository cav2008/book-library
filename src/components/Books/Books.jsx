import React from 'react';
import PropTypes from 'prop-types';
import Book from '../Book/Book';

import styles from './Books.scss';

const Books = (props) => {
  return (
    <div className={styles.books}>
      <h1>Books</h1>
      <div className={styles.books__wrapper}>
        {props.books.map((item, index) => {
          return (
            <Book
              key={index}
              title={item.title}
              description={item.description}
              thumbnail={item.thumbnail}
              category={Books.getCategory(item.categoryId, props.categories)}
            />
          );
        })}
      </div>
    </div>
  );
};

Books.getCategory = (id, categories) => {
  return categories.find(item => item.id === id);
};

Books.propTypes = {
  categories: PropTypes.array.isRequired,
  books: PropTypes.array.isRequired,
};

export default Books;
