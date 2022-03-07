import { Box, Typography } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { useState } from "react";
import "./App.css";
import ChecklistContainer from "./ChecklistContainer";
import Heading from "./Heading";
import { theme } from "./Theme";
import inprocessingItems from "./baseInprocessing.json";

function App() {
  const [header, setHeader] = useState({});
  const [items, setItems] = useState(inprocessingItems);

  function updateHeader(field, value) {
    const newHeader = { ...header };
    if (!value) {
      delete newHeader[field];
    } else {
      newHeader[field] = value;
    }
    setHeader(newHeader);
  }

  function markAsComplete(id) {
    const newItems = [...items];
    let index = newItems.findIndex((item) => item.id === id);
    if (index > -1) {
      const completed = newItems[index].completed;

      if (completed) {
        newItems[index].completed = false;
      } else {
        newItems[index].completed = true;
        newItems[index].completionDate = new Date();
      }
    }
    setItems(newItems);
  }

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ m: 4 }}>
        <Heading header={header} updateHeader={updateHeader} />
      </Box>
      <Typography variant="h6" textAlign={"center"}>
        Note: You must be in uniform for all your appointments.
      </Typography>
      <Box sx={{ m: 4 }}>
        <ChecklistContainer
          header="Base In-Processing"
          checklistItems={inprocessingItems}
          markAsComplete={markAsComplete}
        />
      </Box>
      <Box sx={{ m: 4 }}>
        <ChecklistContainer
          header="Base In-Processing"
          checklistItems={inprocessingItems}
          markAsComplete={markAsComplete}
        />
      </Box>
    </ThemeProvider>
  );
}

export default App;
