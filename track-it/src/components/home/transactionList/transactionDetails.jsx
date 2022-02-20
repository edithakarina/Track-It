import { useState } from "react";
import Grid from "@mui/material/Grid";
import BoxedBalance from "../../boxedBalance";
import { makeStyles } from '@mui/styles';

const useStyles= makeStyles((theme)=>({
  tag:{
    backgroundColor: theme.palette.white.main,
    color: theme.palette.white.contrastText
  },
  container:{
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.secondary.contrastText
  }
}));


function TransactionDetails({desc, tag, amount, currency, transactionType}) {
  
  const classes = useStyles();
  if(transactionType === "expense"){
    amount = -amount;
  }

  return (
    <Grid container className={classes.container+" transactionContainer"}
    alignItems="center"
    justifyContent="space-between">
      <Grid item>
        <Grid container>
          <Grid item xs={12}>
            <p className="bold">{desc}</p>
          </Grid>
          <Grid item xs={12}>
            <div className={classes.tag + " tag"}>
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