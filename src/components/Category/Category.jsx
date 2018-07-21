import React from 'react';
import PropTypes from 'prop-types';

import style from './Category.scss';

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
        className={style.category}
      >
        <button
          className={style.category__button}
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
  selectCategory: PropTypes.func.isRequired,
};
