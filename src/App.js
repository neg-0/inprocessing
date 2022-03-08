import { Alert, Box, Paper, Toolbar } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { useReducer, useState } from "react";
import "./App.css";
import baseInprocessing from "./baseInprocessing.json";
import ChecklistContainer from "./ChecklistContainer";
import Heading from "./Heading";
import MenuDrawer from "./MenuDrawer";
import squadronInprocessing from "./squadronInprocessing.json";
import { theme } from "./Theme";
import flightInprocessing from "./flightInprocessing.json";

const drawerWidth = 240;

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
      <Box sx={{ display: "flex" }}>
        <MenuDrawer drawerWidth={drawerWidth} />
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            p: 3,
            width: { xs: "100%", sm: `calc(100% - ${drawerWidth}px)` },
          }}
        >
          <Toolbar />

          <Paper sx={{ m: 4, p: 2, backgroundColor: "#daf0ff" }} elevation={5}>
            <Heading header={header} updateHeader={updateHeader} />
          </Paper>
          <Alert
            severity="info"
            sx={{ width: "400px", mx: "auto", backgroundColor: "daf0ff" }}
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
            <ChecklistContainer
              header="Squadron"
              checklistItems={squadronInprocessing}
              completedItems={completedItems}
              updateCompletion={updateCompletion}
            />
            <ChecklistContainer
              header="Flight"
              checklistItems={flightInprocessing}
              completedItems={completedItems}
              updateCompletion={updateCompletion}
            />
          </Box>
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default App;
