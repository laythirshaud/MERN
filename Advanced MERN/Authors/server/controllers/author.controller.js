const { Author } = require('../models/author.model');
module.exports.index = (request, response) => {
    response.json({
        message: "Hello World"
    });
}
    // The method below is new
module.exports.createAuthor = (request, response) => {
    const {name} = request.body;
    Author.create({
      name,

    })
        .then(author => response.json(author))
        .catch(err => response.status(400).json(err))
}

module.exports.findAllauthors = (req, res) => {
  Author.find()
      .then(allDaAuthors => res.json(allDaAuthors ))
      .catch(err => res.json({ message: 'Something went wrong', error: err }));
}

module.exports.getAuthor = (request, response) => {
  Author.findOne({_id:request.params.id})
      .then(Author => response.json(Author))
      .catch(err => response.json(err))
}

module.exports.updateAuthor = (request, response) => {
    Author.findOneAndUpdate({_id: request.params.id}, request.body, {new:true,runValidators:true})
        .then(updatedAuthor => response.json(updatedAuthor))
        .catch(err => response.status(400).json(err))
}
module.exports.deleteAuthor = (request, response) => {
    Author.deleteOne({ _id: request.params.id })
        .then(deleteConfirmation => response.json(deleteConfirmation))
        .catch(err => response.json(err))
}