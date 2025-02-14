const mongoose = require("mongoose");
const userSchema = mongoose.Schema(
  {
    name: {
        type: String,
        required: true,
    },
    username: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    mobile: {
        type: String,
        required: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  {
    collection: "users",
  }
);
module.exports = mongoose.model("users", userSchema);