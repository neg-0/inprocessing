import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  status: {
    danger: "#e53e3e",
  },
  palette: {
    complete: {
      main: "#66d688",
      darker: "#053e85",
    },
    incomplete: {
      main: "#d66666",
      contrastText: "#fff",
    },
  },
});
