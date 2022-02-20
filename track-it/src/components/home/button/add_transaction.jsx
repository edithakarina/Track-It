import Button from "@mui/material/Button";
import AddIcon from '@mui/icons-material/Add';
import theme from "../../../styles/colors";
import { ThemeProvider } from "@mui/material";

function AddTransactionBtn() {
  return (
    <Button variant="contained" color="secondary" startIcon={<AddIcon />} fullWidth>New Transaction</Button>
  );
}

export default AddTransactionBtn;