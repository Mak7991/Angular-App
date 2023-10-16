const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const PORT = 3002;
const api = require("./routes/api");
const app = express();
app.use(cors());

//Database Connection
const connectToMongo = require("./database");
connectToMongo();

app.use(bodyParser.json());
app.use("/api", api);

//route
app.get("/", function (req, res) {
  res.send("Hello From Server");
});

app.listen(PORT, function () {
  console.log(`Server is running on localhost:${PORT}`);
});
