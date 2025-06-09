const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  firstname: {
    type: String,
    default: null,
    required: true,
  },
  lastname: {
    type: String,
    default: null,
    required: true,
  },
  email: {
    type: String,
    default: null,
    required: true,
    unique: true, // Ensures that email is unique across users
  },
  password: {
    type: String,
    default: null,
    required: true,
  },
});

// export default userSchema; WONT WORK
// or module.exporst = {userSchema} WONT WORK

//EITHER DO THIS WAY

// const Blog = model('Blog', blogSchema);
// export default Blog;

//OR THIS WAY

//"user" has to be singular
module.exports = mongoose.model("user", userSchema);
