import {useState} from "react";
import Grid from "@mui/material/Grid";
import BoxedBalance from "../../../components/boxedBalance";

import { makeStyles } from '@mui/styles';

const useStyles= makeStyles((theme)=>({
  bgColor:{
    backgroundColor: theme.palette.white.main,
    color: theme.palette.white.contrastText
  }
}));



function TodaySummary(){
  
  const classes = useStyles();
  const[income, setIncome] = useState(13000);
  const[expense, setExpense] = useState(30000);
  const[currency, setCurrency] = useState("Rp.");

  return(
    <div className={"outerContent box "+classes.bgColor}>
      <Grid container >
        <Grid item className="textCenter" xs={12}>
          <p className="bold">Today's Summary</p>
        </Grid>
        <Grid item className="textCenter" xs={12}>
          <Grid container alignItems="center" justifyContent="space-between" className="summaryContent">
            <Grid item>
              <p className="bold">Income</p>
            </Grid>
            <Grid item>
              <BoxedBalance balance={income} currency={currency} needStatus={false} needOperator={false}/>
            </Grid>
          </Grid>
        </Grid>
        <Grid item className="textCenter" xs={12}>
          <Grid container alignItems="center" justifyContent="space-between" className="summaryContent">
            <Grid item>
              <p className="bold">Expense</p>
            </Grid>
            <Grid item>
              <BoxedBalance balance={expense} currency={currency} needStatus={false} needOperator={false}/>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <hr id="summaryLine"/>
        </Grid>
        <Grid item className="textCenter" xs={12}>
          <Grid container alignItems="center" justifyContent="space-between" className="summaryContent">
            <Grid item>
              <p className="bold">Revenue</p>
            </Grid>
            <Grid item>
              <BoxedBalance balance={income-expense} currency={currency} needStatus={true} needOperator={true}/>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  )
}

export default TodaySummary;