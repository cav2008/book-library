const defaultState = {
  categories: [],
  books: [],
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
    default:
      return state;
  }
}
