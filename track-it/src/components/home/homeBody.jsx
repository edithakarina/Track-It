import React from "react";
import Grid from "@mui/material/Grid";

import TodaySummary from "./todaySummary";

function HomeBody() {
  return (
    <div className="outerContent">
      <Grid container>
        <Grid item xs={12} md={5}>
          <TodaySummary />
        </Grid>
      </Grid>
      
    </div>

  )
}

export default HomeBody;