const TodoList = require("../../models/todo");

const todoRoutes = app => {
  app.get("/api/todo", (req, res) => {
    TodoList.find({})
      .then(data => res.send({data}))
      .catch(err => res.send(err));
  });

  app.get("/api/todo/:id", (req, res) => {
    TodoList.findById(req.params.id)
      .then(data => res.send(data))
      .catch(err => res.send(err));
  });

  app.post("/api/todo", (req, res) => {
    const userTodo = new TodoList(req.body);
    console.log(req.body);
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
};

module.exports = todoRoutes;
