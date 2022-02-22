import { useState } from "react";
import Grid from "@mui/material/Grid";
import BoxedBalance from "../boxedBalance";
import { makeStyles } from '@mui/styles';
import Tag from "../button/tag";

const useStyles= makeStyles((theme)=>({
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

  function handleTagClick(content){
    console.log("clicked "+content);
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
            <Tag action={handleTagClick} content={tag} color="white"/>
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