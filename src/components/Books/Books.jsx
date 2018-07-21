import React from 'react';
import PropTypes from 'prop-types';
import Book from '../Book/book';

const Books = (props) => {
  return (
    <div>
      <h1>Books</h1>
      <div>
        {props.books.map((item, index) => {
          return (
            <Book
              key={index}
              title={item.title}
              description={item.description}
              thumbnail={item.thumbnail}
              category={Book.getCategory(item.categoryId, props.categories)}
            />
          );
        })}
      </div>
    </div>
  );
};

Book.getCategory = (id, category) => {
  return category.find(item => item.id === id);
};

Books.propTypes = {
  categories: PropTypes.array.isRequired,
  books: PropTypes.array.isRequired,
};

export default Books;
