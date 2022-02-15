import { useState } from "react";

import Grid from "@mui/material/Grid";
import TransactionDetails from "./transactionDetails";

function Transactions() {

  const today = new Date().toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" });
  const [currentDate, setDate] = useState(today);
  const [transactionList, setTransactionList] = useState([{
    desc: "testing", amount: 30000, currency: "Rp.", tag: "what", transactionType: "income"
  }, {
    desc: "testing2", amount: 50000, currency: "Rp.", tag: "what", transactionType: "expense"
  }, {
    desc: "testing2", amount: 50000, currency: "Rp.", tag: "what", transactionType: "expense"
  }, {
    desc: "testing2", amount: 50000, currency: "Rp.", tag: "what", transactionType: "income"
  }]);



  return (
    <div className="outerContent box transactionBox ">
      <Grid container justifyContent="space-between"
        className="summaryContent">
        <Grid item >
          <h4 className="bold">Today's Transactions</h4>
        </Grid>
        <Grid item>
          <p>{currentDate}</p>
        </Grid>
      </Grid>

      <div className="summaryContent">
        <div className="transactionList">
          {
            transactionList.map((transaction) => {
              return (
                <TransactionDetails {...transaction} />
              );
            })
          }
        </div>
      </div>
    </div >
  );
}

export default Transactions;