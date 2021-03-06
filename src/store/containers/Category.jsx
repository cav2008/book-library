import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Category from '../../components/Category/Category';

import { selectCategory, changeCategoryName } from '../actions/books';

function mapStateToProps(state, ownProps) {
  return {
    category: ownProps.category,
    selectedCategoryId: state.books.selectedCategoryId,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    selectCategory,
    changeCategoryName,
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Category);
