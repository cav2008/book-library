import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import sinon from 'sinon';

import App from './App';

// mock data
const mockCategories = [
  {
    id: 0,
    name: 'vej',
    color: '#cf94c1',
  },
];

const mockBooks = [
  {
    id: 2259051071143936,
    thumbnail: 'https://picsum.photos/150/200',
    title: 'my title',
    description: 'hello world',
    categoryId: 1,
  },
  {
    id: 2259051071143936,
    thumbnail: 'https://picsum.photos/150/200',
    title: 'my title',
    description: 'hello world',
    categoryId: 2,
  },
];

const mockSelectedCategoryId = 0;

// spy functions
const spyFetchCategoriesData = sinon.spy();
const spyFetchBooksData = sinon.spy();


// component
const comp = shallow(
  <App
    categories={mockCategories}
    books={mockBooks}
    selectedCategoryId={mockSelectedCategoryId}
    fetchCategoriesData={spyFetchCategoriesData}
    fetchBooksData={spyFetchBooksData}
  />,
);

test('should mount', () => {
  expect(comp.find('.app').length).to.be.equal(1);
});

test('should return 2 books', () => {
  const books = comp.instance().getFilteredBooks();
  expect(books.length).to.be.equal(2);
});

test('should call fetchCategoriesData', () => {
  expect(spyFetchCategoriesData.called).to.be.true;
});

test('should call fetchBooksData', () => {
  expect(spyFetchBooksData.called).to.be.true;
});

// mock data
const mockSelectedCategoryId1 = 1;

// component
const compWithFilterId = shallow(
  <App
    categories={mockCategories}
    books={mockBooks}
    selectedCategoryId={mockSelectedCategoryId1}
    fetchCategoriesData={spyFetchCategoriesData}
    fetchBooksData={spyFetchBooksData}
  />,
);

test('should return 1 book', () => {
  const books = compWithFilterId.instance().getFilteredBooks();
  expect(books.length).to.be.equal(1);
});
