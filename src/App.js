import { Box } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import * as React from "react";
import "./App.css";
import ChecklistContainer from "./ChecklistContainer";
import Heading from "./Heading";
import { theme } from "./Theme";

function App() {
  const [header, setHeader] = React.useState({});

  function updateHeader(field, value) {
    const newHeader = { ...header };
    if (!value) {
      delete newHeader[field];
    } else {
      newHeader[field] = value;
    }
    setHeader(newHeader);
  }

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ m: 4 }}>
        <Heading header={header} updateHeader={updateHeader} />
      </Box>
      <Box sx={{ m: 4 }}>
        <ChecklistContainer />
      </Box>
    </ThemeProvider>
  );
}

export default App;
