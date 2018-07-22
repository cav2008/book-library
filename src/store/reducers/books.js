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
    case 'CHANGE_CATEGORY_NAME': {
      const updateCategories = [...state.categories];

      updateCategories.find((item, index) => {
        if (item.id === action.id) {
          updateCategories[index].name = action.name;
          return true;
        }
        return false;
      });

      return Object.assign({}, state, {
        categories: updateCategories,
      });
    }
    default:
      return state;
  }
}
