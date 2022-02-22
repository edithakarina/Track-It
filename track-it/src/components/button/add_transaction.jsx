import Button from "@mui/material/Button";
import AddIcon from '@mui/icons-material/Add';

function AddTransactionBtn() {
  return (
    <Button type="submit" variant="contained" color="secondary" startIcon={<AddIcon />} fullWidth className="buttonYellow">New Transaction</Button>
  );
}

export default AddTransactionBtn;