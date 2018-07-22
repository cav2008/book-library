import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import sinon from 'sinon';

import Category from './Category';

// mock data
const mockCategory = {
  id: 0,
  name: 'vej',
  color: '#cf94c1',
};
const mockSelectedCategoryId = 0;

// spy functions
const spySelectCategory = sinon.spy();
const spyChangeCategoryName = sinon.spy();

// component
const comp = shallow(
  <Category
    category={mockCategory}
    selectedCategoryId={mockSelectedCategoryId}
    selectCategory={spySelectCategory}
    changeCategoryName={spyChangeCategoryName}
  />,
);

test('should mount', () => {
  expect(comp.find('.category').length).to.be.equal(1);
  expect(comp.find('.category__button').length).to.be.equal(1);
});

test('should NOT render input when isEdit is false', () => {
  expect(comp.find('[htmlFor="input"]').length).to.be.equal(0);
});

test('should return true isSelected()', () => {
  expect(comp.instance().isSelected()).to.be.true;
});

test('should call selectCategory() once', () => {
  comp.find('.category__button').simulate('click', { target: 0 });
  expect(spySelectCategory.calledOnce).to.be.true;
});

test('should NOT call changeCategoryName() on edit button click', () => {
  comp.find('.category__editButton').simulate('click', { target: '' });
  expect(spyChangeCategoryName.called).to.be.false;
});

test('should set isEdit state true', () => {
  expect(comp.instance().state.isEdit).to.be.true;
});
