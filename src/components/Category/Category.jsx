import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import styles from './Category.scss';

const cx = classNames.bind(styles);

export default class Category extends React.Component {
  constructor(props) {
    super(props);
    this.handleCategoryClick = this.handleCategoryClick.bind(this);
    this.handleEditClick = this.handleEditClick.bind(this);

    this.state = {
      isEdit: false,
    };
  }

  handleCategoryClick(e) {
    this.props.selectCategory(parseInt(e.target.value, 10));
  }

  handleEditClick(e) {
    this.setState({ isEdit: !this.state.isEdit });
  }

  isSelected() {
    return this.props.category.id === this.props.selectedCategoryId;
  }

  render() {
    return (
      <div
        style={{ backgroundColor: this.props.category.color }}
        className={cx('category', { 'category--active': this.isSelected() })}
      >
        <Choose>
          <When condition={this.state.isEdit}>
            <div>
              <input type="text" onBlur={this.handleEditClick}/>
            </div>
          </When>
          <Otherwise>
            <button
              className={styles.category__button}
              value={this.props.category.id}
              onClick={this.handleCategoryClick}
            >
              {this.props.category.name}
            </button>
            <If condition={this.isSelected()}>
              <button
                className={styles.category__editButton}
                onClick={this.handleEditClick}
              >
                edit
              </button>
            </If>
          </Otherwise>
        </Choose>
      </div>
    );
  }
}

Category.propTypes = {
  category: PropTypes.object.isRequired,
  selectedCategoryId: PropTypes.number.isRequired,
  selectCategory: PropTypes.func.isRequired,
};
