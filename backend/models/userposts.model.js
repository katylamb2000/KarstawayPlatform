const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userpostsSchema = new Schema({
    username: {
        type: String,
        required: true
    }, 
    description: {
        type: String, 
        required: true
    }
    
});

const Userposts = mongoose.model('Userposts', userpostsSchema)

module.exports = Userposts