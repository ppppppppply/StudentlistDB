const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const routes = require("./routes/StudentRoute");
const app = express();
const PORT = process.env.port || 5000;

require("dotenv").config();

app.use(express.json());
app.use(cors());

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log(`Connected MongoDb`))
  .catch((err) => console.log(err));

app.use(routes);
app.listen(PORT, () => console.log(`Listening on ${PORT}`));
