import React, {useState} from "react";
import BoxedBalance from "../boxedBalance";


function Balance(){
  const [currency, setCurrency] = useState("Rp.");
  const [balance, setBalance] = useState(0);

  return(
    <div className="balanceContainer">
      <h4 className="bold">Your balance</h4>
      <BoxedBalance balance={balance} currency={currency}/>
    </div>
  );
}

export default Balance;