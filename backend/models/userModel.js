import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    minLength: 8,
    required: true,
  },
  role: {
    type: String,
    enum: ["candidate", "employer"],
    default: "candidate",
    required: true,
  },
  token: {
    type: String,
  },
});

const User = mongoose.model("User", userSchema);
module.exports = User;
