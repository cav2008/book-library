import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import styles from './Category.scss';

const cx = classNames.bind(styles);

export default class Category extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    this.props.selectCategory(parseInt(e.target.value, 10));
  }

  render() {
    return (
      <div
        style={{ backgroundColor: this.props.category.color }}
        className={cx('category', { 'category--active': this.props.category.id === this.props.selectedCategoryId })}
      >
        <button
          className={styles.category__button}
          value={this.props.category.id}
          onClick={this.handleClick}
        >
          {this.props.category.name}
        </button>
      </div>
    );
  }
}

Category.propTypes = {
  category: PropTypes.object.isRequired,
  selectedCategoryId: PropTypes.number.isRequired,
  selectCategory: PropTypes.func.isRequired,
};
