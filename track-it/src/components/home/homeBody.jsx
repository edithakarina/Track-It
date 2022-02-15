import React from "react";
import Grid from "@mui/material/Grid";

import TodaySummary from "./todaySummary";
import Transactions from "./transactionList/transactions";

function HomeBody() {
  return (
    <div className="outerContent">
      <Grid container spacing={2}>
        <Grid item xs={12} md={5}>
          <TodaySummary />
        </Grid>
        <Grid item xs={12} md={7}>
          <Transactions />
        </Grid>
      </Grid>
      
    </div>

  )
}

export default HomeBody;