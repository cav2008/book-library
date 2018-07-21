const Chance = require('chance');

const chance = new Chance();

const categories = [];

for (let i = 0; i < 5; i += 1) {
  categories.push({
    id: i,
    name: chance.word(),
    color: chance.color({ format: 'hex' }),
  });
}

const books = [];

for (let i = 0; i < 50; i += 1) {
  books.push({
    id: chance.natural(),
    thumbnail: 'https://picsum.photos/150/200',
    title: chance.sentence(),
    description: chance.paragraph(),
    categoryId: chance.natural({ min: 0, max: categories.length - 1 }),
  });
}

module.exports = {
  books,
  categories,
};
