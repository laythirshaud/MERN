const { Player } = require('../models/player.model');
module.exports.index = (request, response) => {
    response.json({
        message: "Hello World"
    });
}
    // The method below is new
module.exports.createPlayer = (request, response) => {
    const {name,position} = request.body;
    Player.create({
      name,
      position,

    })
        .then(player => response.json(player))
        .catch(err => response.status(400).json(err))
}

module.exports.findAllplayers = (req, res) => {
  Player.find()
      .then(allDaPlayers => res.json(allDaPlayers ))
      .catch(err => res.json({ message: 'Something went wrong', error: err }));
}

module.exports.getPlayer = (request, response) => {
  Player.findOne({_id:request.params.id})
      .then(Player => response.json(Player))
      .catch(err => response.json(err))
}

module.exports.updatePlayer = (request, response) => {
    Player.findOneAndUpdate({_id: request.params.id}, request.body, {new:true,runValidators:true})
        .then(updatedPlayer => response.json(updatedPlayer))
        .catch(err => response.status(400).json(err))
}
module.exports.deletePlayer = (request, response) => {
    Player.deleteOne({ _id: request.params.id })
        .then(deleteConfirmation => response.json(deleteConfirmation))
        .catch(err => response.json(err))
}