import getBalance from "../function/getBalance";

function BoxedBalance({ balance, currency, needStatus, needOperator }) {
  let balanceClass= "";
  let operator = "";
  let tempBalance = 0;

  if(needStatus){
    if (balance < 0) {
      balanceClass = "balanceRed";
  } else if (balance > 0) {
      balanceClass = "balanceGreen";
  }else {
    balanceClass = "";
  }
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

  // function determineClass() {
  //   if (balance < 0) {
  //       balanceClass = "balanceRed";
  //   } else if (balance > 0) {
  //       balanceClass = "balanceGreen";
  //   }else {
  //     balanceClass = "";
  //   }
  //   console.log(balanceClass);
  //   return balanceClass;
  // }

  return (
    <div className={"balance " + balanceClass}>
    {operator}  {currency} {getBalance(tempBalance)}</div>
  )
}

export default BoxedBalance;