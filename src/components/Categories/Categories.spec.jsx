import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import Categories from './Categories';

// mock data
const mockCategories = [
  {
    id: 0,
    name: 'vej',
    color: '#cf94c1',
  },
];

// component
const comp = shallow(
  <Categories
    categories={mockCategories}
  />,
);

test('should mount', () => {
  expect(comp.find('.categories').length).to.be.equal(1);
});
