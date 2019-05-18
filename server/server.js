const express = require("express");
var cors = require("cors");
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
const app = express();
const port = 5000;

app.use(bodyParser.json());
app.use(cors());
app.use(
  bodyParser.urlencoded({
    extended: false
  })
);

const mongoURI = "mongodb://localhost:27017/mernlogin";
mongoose
  .connect(mongoURI, { useNewUrlParser: true })
  .then(() => console.log("Mongodb Connected"))
  .catch(err => console.log(err));

// app.get("/api/customers", (req, res) => {
//   const customers = [
//     { id: 1, firstname: "john", lastname: "bruto" },
//     { id: 2, firstname: "praveen", lastname: "kumar" },
//     { id: 3, firstname: "john", lastname: "stark" }
//   ];
//   res.json(customers);
// });
var Users = require("./routes/Users");

app.use("/users", Users);

app.listen(port, () => {
  console.log("successfully started on 5000");
});
