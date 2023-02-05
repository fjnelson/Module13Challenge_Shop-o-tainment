const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

Product.belongsTo(Category, {
  foreignKey: "Category_id",
});

Category.hasMany(Product, {
  foreignKey: "Category_id",
});

Tag.belongsToMany(Product, {
  through: "ProductTag",
  foreignKey: "Product_id",
});

Product.belongsToMany(Tag, {
  through: "ProductTag",
  foreignKey: "Product_id",
});

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
