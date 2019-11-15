const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const todoRoutes = require("./routes/api/todo");

dotenv.config();
const app = express();

app.use(express.urlencoded({ extended: false }));
mongoose.connect(process.env.DB_URL, {useNewUrlParser: true, useUnifiedTopology: true})
  .then(() => console.log(`Connected to DB ${process.env.DB_URL}`))
  .catch(error => console.log(error));

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', process.env.CLIENT_CORS);
  next();
});

todoRoutes(app);

app.listen(process.env.PORT, () => {
  console.log(`server is UP and on ${process.env.PORT} port`);
});
