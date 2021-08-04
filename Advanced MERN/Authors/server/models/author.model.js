const mongoose = require('mongoose');


const AuthorSchema = new mongoose.Schema({
    name: { type: String,
        required: [true,"Name is required"], 
        minlength:[3,"Name is must be 3 characters"]
    },

}, { timestamps: true });
module.exports.Author = mongoose.model('author', AuthorSchema);