const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const morgan = require("morgan");
require("dotenv").config();
require("./db/db");

//middlewares
app.use(bodyParser.json());
app.use(cookieParser());
app.use(morgan("dev"));

//routes
app.get("/", (req, res) => {
  res.send("Hello World");
});

//start server
const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
