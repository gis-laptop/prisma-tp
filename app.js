

const product = require('./json/product.json');

const Product = product.map((product) => {
  return {
    id: product.id,
    title: product.title,
    description : product.description,
  }
});


console.log(Product);