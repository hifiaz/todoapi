const mongoose = require("mongoose");

const Schema = mongoose.Schema;

let TodoScrhema = Schema({
  name: { type: String },
  done: { type: Boolean }
});

module.exports = mongoose.model("Todos", TodoScrhema);
