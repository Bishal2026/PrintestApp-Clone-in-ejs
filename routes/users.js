const mongoose = require('mongoose');
const plm = require("passport-local-mongoose");

mongoose.connect("mongodb://localhost:27017/data1")

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    unique: true,
    required: true,
  },
  password: {
    type: String,
   
  },
  posts: 
     [{
      type:mongoose.Schema.Types.ObjectId,
      ref:'Post',
     }], // Assuming posts are represented as an array of strings
  
  dp: {
    type: String, // Assuming dp is a URL or file path to the user's profile picture
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  fullname: {
    type: String,
  },
});

userSchema.plugin(plm);

const User = mongoose.model('User', userSchema);

module.exports = User;
