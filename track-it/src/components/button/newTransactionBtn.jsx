import Button from "@mui/material/Button";

function NewTransactionButton() {
  return (
    <Button variant="contained" color="tertiary" fullWidth className="submitButton content" type="submit">Add Transaction</Button>
  );
}

export default NewTransactionButton;