import { useState } from "react";
import Grid from "@mui/material/Grid";
import BoxedBalance from "../../boxedBalance";

function TransactionDetails({desc, tag, amount, currency, transactionType}) {

  if(transactionType === "expense"){
    amount = -amount;
  }

  return (
    <Grid container className="transactionContainer"
    alignItems="center"
    justifyContent="space-between">
      <Grid item>
        <Grid container>
          <Grid item xs={12}>
            <p className="bold">{desc}</p>
          </Grid>
          <Grid item xs={12}>
            <div className="tag">
              #{tag}
            </div>
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        <BoxedBalance balance={amount} currency={currency} needStatus={false} needOperator={true}/>
      </Grid>
    </Grid>
  );
}

export default TransactionDetails;