const { Tag } = require('../models');

const tagData = [
  {
    tag_name: 'sports',
  },
  {
    tag_name: 'hip hop',
  },
  {
    tag_name: 'yellow',
  },
  {
    tag_name: 'brown',
  },
  {
    tag_name: 'black',
  },
  {
    tag_name: 'dark',
  },
  {
    tag_name: 'light',
  },
  {
    tag_name: 'jazz',
  },
];

const seedTags = () => Tag.bulkCreate(tagData);

module.exports = seedTags;
