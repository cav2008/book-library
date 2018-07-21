import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

// actions
import { fetchCategoriesData, fetchBooksData } from '../actions/books';

// component
import App from '../../components/App';

function mapStateToProps(state) {
  return {
    categories: state.books.categories,
    books: state.books.books,
    selectedCategoryId: state.books.selectedCategoryId,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    fetchCategoriesData,
    fetchBooksData,
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
