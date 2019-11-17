const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const todoRoutes = require("./routes/api/todo");

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));
mongoose.connect(process.env.DB_URL, {useNewUrlParser: true, useUnifiedTopology: true})
  .then(() => console.log(`Connected to DB ${process.env.DB_URL}`))
  .catch(error => console.log(error));

todoRoutes(app);

app.listen(process.env.PORT, () => {
  console.log(`server is UP and on ${process.env.PORT} port`);
});
