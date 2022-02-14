const currencyOptions = {
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
}

function getBalance(balance) {
  return balance.toLocaleString(undefined, currencyOptions)
}

export default getBalance;
