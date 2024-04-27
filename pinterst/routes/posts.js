const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const postSchema = new Schema({
  postText: {
    type: String,
    required: true
  },
  currentDate: {
    type: Date,
    default: Date.now
  },
  currentTime: {
    type: String,
    default: new Date().toLocaleTimeString()
  },
  likes: {
    type: Array,
    default: []
  }
});

module.exports  = mongoose.model('Post', postSchema);


