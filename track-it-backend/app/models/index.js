const dbConfig = require("../config/db_config");
const mongoose = require("mongoose");

const db={
  mongoose : mongoose,
  url : dbConfig.url,
  tag: require("./tag_model"),
  transaction: require("./transaction_model")
}

module.exports= db;