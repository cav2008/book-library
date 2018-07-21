import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import styles from './Book.scss';

const cx = classNames.bind(styles);

const Book = (props) => {
  return (
    <div className={styles.book}>
      <div className={cx('book__content', 'book__content--auto')}>
        <img src={props.thumbnail} alt={props.title} />
        <div>
          <p style={{ backgroundColor: props.category.color }}>{props.category.name}</p>
        </div>
      </div>
      <div className={styles.book__content}>
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
