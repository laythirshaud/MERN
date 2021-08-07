const PlayerController = require('../controllers/player.controller');
module.exports = function(app){
    app.get('/api/player', PlayerController.findAllplayers);
    app.get('/api', PlayerController.index);
    app.post('/api/player/new', PlayerController.createPlayer);
    app.get('/api/player/:id', PlayerController.getPlayer);
    app.put('/api/player/:id', PlayerController.updatePlayer);
    app.delete('/api/player/delete/:id', PlayerController.deletePlayer);
}