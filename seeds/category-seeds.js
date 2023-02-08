const { Category } = require('../models');

const categoryData = [
  {
    category_name: 'Sweaters',
  },
  {
    category_name: 'Pants',
  },
  {
    category_name: 'Records',
  },
  {
    category_name: 'Cowboy Hats',
  },
  {
    category_name: 'Sneakers',
  },
];

const seedCategories = () => Category.bulkCreate(categoryData);

module.exports = seedCategories;
