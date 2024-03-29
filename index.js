const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const messagesRouter = require("./router/messagesRouter");
const utilsRouter = require("./router/utilsRouter");

const app = express();
app.use(cors());

// for parsing application/json
app.use(bodyParser.json());

// for parsing application/json
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/messages", messagesRouter);
app.use("/utils", utilsRouter);

const port = process.env.PORT || 8080;

app.listen(port, () => {
  console.log(`Weather app listening on port ${port}!`);
});
