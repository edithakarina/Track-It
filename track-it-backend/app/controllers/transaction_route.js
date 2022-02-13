const express = require("express");
const { mongoose } = require("../models/index");
const transactionRouter = express.Router();
const db = require("../models/index");
const Transaction = db.transaction;

transactionRouter.get("/allTransaction", (req, res) => {
  Transaction.find({}, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      console.log("sent result");
      res.status(200).send(result);
    }
  })
});

transactionRouter.post("/addTransaction", (req, res) => {
  const newTransaction = new Transaction({
    description: req.body.description,
    tag: mongoose.Types.ObjectId(req.body.tagId),
    amount: req.body.amount,
    currency: req.body.currency,
    transactionType: req.body.type,
  });

  newTransaction.save((err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("successfully added new transaction");
    }
  });
  res.status(200).send(newTransaction);
});

module.exports = transactionRouter;