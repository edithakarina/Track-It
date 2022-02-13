require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const db = require("./app/models/index");
const allRoute = require("./app/controllers/all_routes");

const app = express();
app.use(express.json());
var corsOptions = {
  origin: "http://localhost:3000"
};
app.use(cors(corsOptions));
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/transaction", allRoute.transactionRoute);
app.use("/tag", allRoute.tagRoute);

db.mongoose
.connect(db.url, {useNewUrlParser: true})
.then(()=>{
  console.log("connected to database!");
})
.catch((err)=>{
  console.log(err);
  process.exit();
});

let PORT = process.env.PORT;
if (PORT == null || PORT == "") {
  PORT = 4000;
}

app.listen(PORT, ()=>{
  console.log("server is running on port "+PORT);
});
