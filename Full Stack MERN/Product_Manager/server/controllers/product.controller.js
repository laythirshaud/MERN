const { Product } = require('../models/product.model');
module.exports.index = (request, response) => {
    response.json({
        message: "Hello World"
    });
}
    // The method below is new
module.exports.createProduct = (request, response) => {
    const { title, price,description} = request.body;
    Product.create({
      title,
      price,
      description,

    })
        .then(product => response.json(product))
        .catch(err => response.json(err));
}

module.exports.findAllproducts = (req, res) => {
  Product.find()
      .then(allDaProducts => res.json({ products: allDaProducts }))
      .catch(err => res.json({ message: 'Something went wrong', error: err }));
}