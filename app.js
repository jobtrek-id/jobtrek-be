const express = require("express");
const app = express();

require("dotenv").config();
const port = process.env.APP_PORT || 3030;

const router = require("./route");
app.use("/", router);

app.listen(port, () => {
   console.log(`Running ons port ${port}`);
});
