const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost:27017/data1");
const postSchema = new mongoose.Schema({
  imageText: {
    type: String,
    required: true,
  },
  image:{
    type:String,
  },
  user:{
    type:mongoose.Schema.Types.ObjectId,
    ref:'User'
  },
  postDate: {
    type: Date,
    default: Date.now,
  },
  likes: {
    type: Array,
    default: [],
  },
});

const Post = mongoose.model('Post', postSchema);

module.exports = Post;
