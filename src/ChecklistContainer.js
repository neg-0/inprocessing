import { Box, Typography } from "@mui/material";
import ChecklistItem from "./ChecklistItem";

export default function ChecklistContainer({
  header,
  checklistItems,
  markAsComplete,
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
              markAsComplete={markAsComplete}
            />
          ))}
        </Box>
      </aside>
    </Box>
  );
}
