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
      .then(allDaProducts => res.json(allDaProducts ))
      .catch(err => res.json({ message: 'Something went wrong', error: err }));
}

module.exports.getProduct = (request, response) => {
  Product.findOne({_id:request.params.id})
      .then(Product => response.json(Product))
      .catch(err => response.json(err))
}