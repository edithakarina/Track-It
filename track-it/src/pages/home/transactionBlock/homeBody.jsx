import React from "react";
import Grid from "@mui/material/Grid";

import TodaySummary from "./todaySummary";
import Transactions from "./transactions";
import AddTransactionBtn from "../../../components/button/add_transaction";
import ExportPdfButton from "../../../components/button/export_pdf_button";

function HomeBody() {
  return (
    <div className="outerContent">
      <Grid container spacing={3} >
        <Grid item xs={12} md={7} order={{xs:2, md:1}}>
          <Transactions />
        </Grid>
        <Grid item xs={12} md={5} order={{xs:1, md:2}}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TodaySummary />
            </Grid>
            <Grid item xs={6}>
              <ExportPdfButton />
            </Grid>
            <Grid item xs={6}>
              <AddTransactionBtn />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>

  )
}

export default HomeBody;