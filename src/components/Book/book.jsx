import React from 'react';
import PropTypes from 'prop-types';

const Book = (props) => {
  return (
    <div>
      <div>
        <img src={props.thumbnail} alt={props.title} />
        <span>{props.category.name}</span>
      </div>
      <div>
        <p>{props.title}</p>
        <p>{props.description}</p>
      </div>
    </div>
  );
};

Book.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  thumbnail: PropTypes.string.isRequired,
  category: PropTypes.object.isRequired,
};

export default Book;
