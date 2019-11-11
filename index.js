const express = require("express");
const mongoose = require("mongoose");
const config = require("./config/db");
const bodyParser = require("body-parser");

const app = express();
const PORT = 3001;
app.use(bodyParser.urlencoded({ extended: false }));
mongoose.connect(config.db, {useNewUrlParser: true, useUnifiedTopology: true})
  .then(() => console.log(`Connected to DB ${config.db}`))
  .catch(error => console.log(error));

const TodoList = mongoose.model("TodoList", {
  title: String,
  description: String,
  completed: {
    type: Boolean,
    default: false,
  },
});

app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8081');
  next();
});

app.get("/api/todo", (req, res) => {
  TodoList.find({})
    .then(data => res.send({data}))
    .catch(err => res.send(err));
});

app.get("/api/todo/:id", (req, res) => {
  console.log(req.params.id);
  TodoList.findById(req.params.id)
    .then(data => res.send(data))
    .catch(err => res.send(err));
});

app.post("/api/todo", (req, res) => {
  const userTodo = new TodoList(req.body);
  userTodo.save()
    .then(data => res.send(data))
    .catch(err => res.send(err));
});

app.put("/api/todo/:id", (req, res) => {
  TodoList.findByIdAndUpdate(req.params.id, req.body)
    .then(data => res.send(data))
    .catch(err => res.send(err));
});

app.delete("/api/todo/:id", (req, res) => {
  TodoList.findByIdAndRemove(req.params.id)
    .then(data => res.send(data))
    .catch(err => res.send(err));
});

app.listen(PORT, () => {
  console.log(`server is UP and on ${PORT} port`);
});