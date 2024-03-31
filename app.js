require("dotenv").config();
const port = process.env.APP_PORT || 3030;

const express = require("express");
const routes = require("./src/routes");

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/", routes);

app.listen(port, () => {
   console.log(`Running on port ${port}`);
});

module.exports = app;
