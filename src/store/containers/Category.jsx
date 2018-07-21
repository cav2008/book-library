import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Category from '../../components/Category/Category';

import { selectCategory } from '../actions/books';

function mapStateToProps(state, ownProps) {
  return {
    category: ownProps.category,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    selectCategory,
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Category);
