const mongoose = require("mongoose");

const transactionSchema = new mongoose.Schema({
  description: {
    type: String,
    default: "???"
  },
  tag: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Tag"
  },
  amount: {
    type: mongoose.Decimal128,
    default: 0.00
  },
  currency: String,
  transactionType: String,
  date: {
    type:Date,
    default: Date.now
  }
});
const Transaction = mongoose.model("transaction", transactionSchema);

module.exports = Transaction;