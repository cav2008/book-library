import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import Books from './Books';

// mock data
const mockCategories = [
  {
    id: 0,
    name: 'vej',
    color: '#cf94c1',
  },
  {
    id: 1,
    name: 'my category',
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
];

// component
const comp = shallow(
  <Books
    categories={mockCategories}
    books={mockBooks}
  />,
);

test('should mount', () => {
  expect(comp.find('.books').length).to.be.equal(1);
});

test('should return correct category', () => {
  const filterCategory = Books.getCategory(1, mockCategories);
  expect(filterCategory.name).to.be.equal('my category');
});
