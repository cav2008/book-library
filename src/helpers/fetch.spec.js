import { expect } from 'chai';

import fetch from './fetch';

test('should return promise', () => {
  const data = fetch('http://localhost:3000/categories');
  expect(data).to.be.an('promise');
});
