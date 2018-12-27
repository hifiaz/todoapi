const express = require("express");
const bodyParser = require("body-parser");
const todos = require("./routes/todoRoutes");
const mongoose = require("mongoose");

let mongourl = "mongodb://localhost:27017/todoapi";

const mongoDB = mongourl;
mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;
const db = mongoose.connection;
db.on("eror", console.error.bind(console, "Connection Eror coba cek dulu"));

const app = express();
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/api", todos);


const port = 3000;
app.listen(port, () => console.log(`Localhost udah jalan di port ${port}`));
