import getBalance from "../function/getBalance";

import { makeStyles } from '@mui/styles';

const useStyles= makeStyles((theme)=>({
  bgColor:{
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.secondary.contrastText
  }
}));


function BoxedBalance({ balance, currency, needStatus, needOperator }) {
  
  const classes = useStyles();

  let balanceClass= classes.bgColor;
  let operator = "";
  let tempBalance = 0;

  if(needStatus){
    if (balance < 0) {
      balanceClass = "balanceRed";
  } else if (balance > 0) {
      balanceClass = "balanceGreen";
  }else {
    balanceClass = classes.bgColor;
  }
  console.log(balanceClass);
}

if(needOperator){
  if(balance<0){
    tempBalance = -balance;
    operator="-";
  }else{
    tempBalance = balance;
    operator="";
  }
}else{
  tempBalance=balance;
}

  return (
    <div className={"balance "+balanceClass}>
    {operator}  {currency} {getBalance(tempBalance)}</div>
  )
}

export default BoxedBalance;