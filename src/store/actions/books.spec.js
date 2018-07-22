import { expect } from 'chai';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import axios from 'axios';
import AxiosMockAdapter from 'axios-mock-adapter';

import * as actions from './books';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

const fetchMock = new AxiosMockAdapter(axios);

test('should fire SAVE_CATEGORIES action', () => {
  const categories = [
    {
      id: 0,
      name: 'vej',
      color: '#cf94c1',
    },
  ];

  const expectedAction = {
    type: 'SAVE_CATEGORIES',
    categories,
  };

  expect(actions.saveCategories(categories)).to.deep.equal(expectedAction);
});

test('should fire SAVE_BOOKS action', () => {
  const books = [
    {
      id: 2259051071143936,
      thumbnail: 'https://picsum.photos/150/200',
      title: 'my title',
      description: 'hello world',
      categoryId: 1,
    },
  ];

  const expectedAction = {
    type: 'SAVE_BOOKS',
    books,
  };

  expect(actions.saveBooks(books)).to.deep.equal(expectedAction);
});

test('should fire saveCategories action on fetchCategoriesData()', () => {
  const store = mockStore({});
  const mockCategories = [{
    id: 0,
    name: 'vej',
    color: '#cf94c1',
  }];

  fetchMock.onGet('/categories')
    .reply(200, mockCategories);

  return store.dispatch(actions.fetchCategoriesData('/categories'))
    .then(() => {
      const mockActions = store.getActions();
      expect(mockActions[0]).to.deep.equal(actions.saveCategories(mockCategories));
    });
});

test('should fire saveBooks action on fetchBooksData()', () => {
  const store = mockStore({});
  const mockBooks = [{
    id: 2259051071143936,
    thumbnail: 'https://picsum.photos/150/200',
    title: 'my title',
    description: 'hello world',
    categoryId: 1,
  }];

  fetchMock.onGet('/books')
    .reply(200, mockBooks);

  return store.dispatch(actions.fetchBooksData('/books'))
    .then(() => {
      const mockActions = store.getActions();
      expect(mockActions[0]).to.deep.equal(actions.saveBooks(mockBooks));
    });
});

test('should fire selectCategory action', () => {
  const mockId = 1;

  const expectedAction = {
    type: 'SELECT_CATEGORY',
    id: mockId,
  };

  expect(actions.selectCategory(mockId)).to.deep.equal(expectedAction);
});

test('should fire changeCategoryName action', () => {
  const mockId = 1;
  const mockCategory = 'custom category';

  const expectedAction = {
    type: 'CHANGE_CATEGORY_NAME',
    id: mockId,
    name: mockCategory,
  };

  expect(actions.changeCategoryName(mockId, mockCategory)).to.deep.equal(expectedAction);
});
