import { Box, Typography, Paper, Alert } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { useReducer, useState } from "react";
import "./App.css";
import baseInprocessing from "./baseInprocessing.json";
import ChecklistContainer from "./ChecklistContainer";
import Heading from "./Heading";
import squadronInprocessing from "./squadronInprocessing.json";
import { theme } from "./Theme";

function completionReducer(state, action) {
  switch (action.setCompleted) {
    case true:
      return { ...state, [action.id]: new Date() };
    case false:
      let newState = { ...state };
      delete newState[action.id];
      return newState;
    default:
      throw new Error();
  }
}

function App() {
  const [header, setHeader] = useState({});
  const [completedItems, updateCompletion] = useReducer(completionReducer, {});

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
      <Paper sx={{ m: 4, p: 2, backgroundColor: "#daf0ff" }} elevation={5}>
        <Heading header={header} updateHeader={updateHeader} />
      </Paper>
      <Alert
        severity="info"
        sx={{ width: "350px", mx: "auto", backgroundColor: "daf0ff" }}
      >
        You must be in uniform for all your appointments.
      </Alert>
      <Box sx={{ m: 4 }}>
        <ChecklistContainer
          header="Base"
          checklistItems={baseInprocessing}
          completedItems={completedItems}
          updateCompletion={updateCompletion}
        />
      </Box>
      <Box sx={{ m: 4 }}>
        <ChecklistContainer
          header="Squadron"
          checklistItems={squadronInprocessing}
          completedItems={completedItems}
          updateCompletion={updateCompletion}
        />
      </Box>
    </ThemeProvider>
  );
}

export default App;
