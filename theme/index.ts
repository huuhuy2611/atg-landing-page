import { createTheme } from "@mui/material/styles";

// Create a custom theme
const theme = createTheme({
  palette: {
    primary: {
      light: "#C7D8B7",
      main: "#408A5E",
      dark: "#02271F",
    },
  },
  typography: {
    h1: {
      fontFamily: "PlayfairDisplay-Bold",
      fontWeight: "bold",
      fontSize: "56px",
      lineHeight: "84px",
      color: "#043F32",

      "@media (max-width:600px)": {
        fontSize: "48px",
        lineHeight: "72px",
      },
    },
    h2: {
      fontFamily: "PlayfairDisplay-Bold",
      fontWeight: "bold",
      fontSize: "48px",
      lineHeight: "72px",
      color: "#043F32",

      "@media (max-width:600px)": {
        fontSize: "40px",
        lineHeight: "60px",
      },
    },
    h3: {
      fontFamily: "AeonikPro-Regular",
      fontSize: "32px",
      lineHeight: "48px",

      "@media (max-width:600px)": {
        fontSize: "24px",
        lineHeight: "36px",
      },
    },
    h4: {
      fontFamily: "AeonikPro-Regular",
      fontSize: "24px",
      lineHeight: "36px",

      "@media (max-width:600px)": {
        fontSize: "18px",
        lineHeight: "27px",
      },
    },
    body1: {
      fontFamily: "AeonikPro-Regular",
      fontSize: "16px",
      lineHeight: "24px",

      "@media (max-width:600px)": {
        fontSize: "14px",
        lineHeight: "21px",
      },
    },
    body2: {
      fontFamily: "AeonikPro-Regular",
      fontSize: "12px",
      lineHeight: "18px",
    },
    button: {
      textTransform: "unset",
      fontFamily: "AeonikPro-Regular",
      fontSize: "16px",
      lineHeight: "24px",

      "@media (max-width:600px)": {
        fontSize: "14px",
        lineHeight: "21px",
      },
    },
  },
});

export default theme;
