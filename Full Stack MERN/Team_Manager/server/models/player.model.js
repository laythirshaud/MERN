const mongoose = require('mongoose');


const PlayerSchema = new mongoose.Schema({
    name: { type: String,
        required: [true,"Name is required"], 
        minlength:[3,"Name is must be 3 characters"]
    },
    position: { type: String,
        required: [true,"Position is required"], 
        minlength:[3,"Position is must be 3 characters"]
    },

}, { timestamps: true });
module.exports.Player = mongoose.model('player', PlayerSchema);