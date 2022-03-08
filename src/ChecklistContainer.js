import { Box, Typography } from "@mui/material";
import { useCallback } from "react";
import ChecklistItem from "./ChecklistItem";

export default function ChecklistContainer({
  header,
  checklistItems,
  completedItems,
  updateCompletion,
}) {
  return (
    <Box className="csstransforms">
      <aside>
        <Typography component="h3" className="Checklist-header">
          {header}
        </Typography>
        <Box className="Checklist">
          {checklistItems.map((item, index) => (
            <ChecklistItem
              key={index}
              item={item}
              completedItems={completedItems}
              updateCompletion={updateCompletion}
            />
          ))}
        </Box>
      </aside>
    </Box>
  );
}
