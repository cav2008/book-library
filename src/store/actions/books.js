import fetch from '../../helpers/fetch';

export const saveCategories = (categories) => {
  return {
    type: 'SAVE_CATEGORIES',
    categories,
  };
};

export const saveBooks = (books) => {
  return {
    type: 'SAVE_BOOKS',
    books,
  };
};

export const fetchCategoriesData = (url) => {
  return (dispatch) => {
    return fetch(url).then((result) => {
      dispatch(saveCategories(result.data));
    });
  };
};

export const fetchBooksData = (url) => {
  return (dispatch) => {
    return fetch(url).then((result) => {
      dispatch(saveBooks(result.data));
    });
  };
};

export const selectCategory = (id) => {
  return {
    type: 'SELECT_CATEGORY',
    id,
  };
};

export const changeCategoryName = (id, name) => {
  return {
    type: 'CHANGE_CATEGORY_NAME',
    id,
    name,
  };
};
