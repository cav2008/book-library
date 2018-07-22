import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import Book from './Book';

// mock data
const mockTitle = 'hello';
const mockDescription = 'hello description';
const mockThumbnail = 'picture';
const mockCategory = {
  id: 0,
  name: 'vej',
  color: '#cf94c1',
};

// mock component
const comp = shallow(
  <Book
    title={mockTitle}
    description={mockDescription}
    thumbnail={mockThumbnail}
    category={mockCategory}
  />,
);

test('should mount', () => {
  expect(comp.find('.book').length).to.be.equal(1);
});
