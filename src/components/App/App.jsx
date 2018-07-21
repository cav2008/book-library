import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import Categories from '../Categories/Categories';
import Books from '../Books/Books';

import styles from './App.scss';

const cx = classNames.bind(styles);

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.props.fetchCategoriesData('http://localhost:3000/categories');
    this.props.fetchBooksData('http://localhost:3000/books');

    this.getFilteredBooks = this.getFilteredBooks.bind(this);
  }

  getFilteredBooks() {
    if (!this.props.selectedCategoryId) {
      return this.props.books;
    }

    return this.props.books.filter((item) => {
      return item.categoryId === this.props.selectedCategoryId;
    });
  }

  render() {
    return (
      // <div className={cx('app', { 'app--red': Math.random() > 0.5 })}>VIOOH Technical test</div>
      <div className={styles.app}>
        <Categories categories={this.props.categories} />
        <Books categories={this.props.categories} books={this.getFilteredBooks()} />
      </div>
    );
  }
}

App.propTypes = {
  categories: PropTypes.array.isRequired,
  books: PropTypes.array.isRequired,
  selectedCategoryId: PropTypes.number.isRequired,
  fetchCategoriesData: PropTypes.func.isRequired,
  fetchBooksData: PropTypes.func.isRequired,
};

