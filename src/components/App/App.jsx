import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './App.scss';
import Categories from '../Categories/Categories';
import Books from '../Books/Books';

const cx = classNames.bind(styles);

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.props.fetchCategoriesData('http://localhost:3000/categories');
    this.props.fetchBooksData('http://localhost:3000/books');
  }

  render() {
    return (
      // <div className={cx('app', { 'app--red': Math.random() > 0.5 })}>VIOOH Technical test</div>
      <div>
        <Categories categories={this.props.categories} />
        <Books categories={this.props.categories} books={this.props.books} />
      </div>
    );
  }
}

App.propTypes = {
  categories: PropTypes.array.isRequired,
  books: PropTypes.array.isRequired,
  fetchCategoriesData: PropTypes.func.isRequired,
  fetchBooksData: PropTypes.func.isRequired,
};

