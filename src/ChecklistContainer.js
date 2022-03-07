import { Box } from "@mui/material";
import { useState } from "react";
import ChecklistItem from "./ChecklistItem";
import baseInprocessing from "./baseInprocessing.json";

export default function ChecklistContainer() {
  const [items, setItems] = useState(baseInprocessing);

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
    <Box className="Checklist">
      {items.map((item, index) => (
        <ChecklistItem
          key={index}
          item={item}
          markAsComplete={markAsComplete}
        />
      ))}
    </Box>
  );
}
