const mongoose = require("mongoose");

const TodoList = mongoose.model("TodoList", {
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  completed: {
    type: Boolean,
    default: false,
  },
});

module.exports = TodoList;
