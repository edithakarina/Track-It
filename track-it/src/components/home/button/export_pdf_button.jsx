import Button from "@mui/material/Button";
import theme from "../../../styles/colors";
import { ThemeProvider } from "@mui/material";

function ExportPdfButton() {
  return (
    <Button variant="contained" color="secondary" fullWidth disabled>Export as PDF</Button>
  );
}

export default ExportPdfButton;