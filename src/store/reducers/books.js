const defaultState = {
  categories: [],
  books: [],
  selectedCategoryId: 0,
};

export default function books(state = defaultState, action) {
  switch (action.type) {
    case 'SAVE_CATEGORIES':
      return Object.assign({}, state, {
        categories: [...action.categories],
      });
    case 'SAVE_BOOKS':
      return Object.assign({}, state, {
        books: [...action.books],
      });
    case 'SELECT_CATEGORY':
      return Object.assign({}, state, {
        selectedCategoryId: action.id,
      });
    default:
      return state;
  }
}
