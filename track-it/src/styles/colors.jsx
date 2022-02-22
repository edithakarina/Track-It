import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: "#5800ff",
      light: "#7933ff",
      dark: "#3d00b2",
      contrastText: "#fff"
    },
    secondary: {
      main: "#ffc600",
      light: "#ffd133",
      dark: "#b28a00",
      contrastText: "#4300c2"
    },
    tertiary: {
      main: "#4300c2",
      light: "#6833ce",
      dark: "#2e0087",
      contrastText:"#fff"
    },
    white:{
      main:"#fff",
      contrastText:"#4300c2"
    },
    action: {
      disabledBackground:"#2e0087",
      disabled: "rgba(255,255,255, 0.3)"
    }
  },
  components: {
    MuiButton: {
      styleOverrides:
      {
        root: {
          fontFamily: "Montserrat",
          fontWeight: "bold",
          textTransform: "none"
        }
      }
    }
  }
});

export default theme;