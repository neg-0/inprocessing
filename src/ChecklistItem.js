import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Box, Button } from "@mui/material";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import { format as formatDate } from "date-fns";
import { useCallback } from "react";

export default function ChecklistItem({
  item,
  completedItems,
  updateCompletion,
}) {
  const isItemCompleted = useCallback(() => {
    return Object.keys(completedItems).includes(`${item.id}`);
  }, [item, completedItems]);

  return (
    <Box sx={{ my: 2 }}>
      <Box
        className={"Checklist-item" + (isItemCompleted() ? "-completed" : "")}
      >
        <Accordion
          sx={{
            backgroundColor: isItemCompleted() ? "#66d688" : "#d6d6e1",
            borderRadius: "12px",
          }}
          square
          elevation={0}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography variant="h6">{item.title}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>{item.content}</Typography>
            <Box
              sx={{
                my: 2,
                mx: 2,
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-evenly",
              }}
            >
              {item["Additional Fields"] &&
                Object.entries(item["Additional Fields"]).map(
                  ([key, value], index) => (
                    <Typography key={index}>
                      {key}: {value || "N/A"}
                    </Typography>
                  )
                )}
            </Box>
            <Box sx={{ width: 300, mx: "auto", textAlign: "center" }}>
              <Button
                fullWidth
                sx={{ my: 1 }}
                variant={isItemCompleted() ? "outlined" : "contained"}
                color={isItemCompleted() ? "incomplete" : "complete"}
                onClick={() =>
                  updateCompletion({
                    id: item.id,
                    setCompleted: !isItemCompleted(),
                  })
                }
              >
                Mark as {isItemCompleted() ? "Incomplete" : "Complete"}
              </Button>
              {isItemCompleted() && (
                <Typography variant="body">
                  Completed on{" "}
                  {formatDate(
                    completedItems[item.id],
                    "MM/dd/yyyy 'at' hh:mm:ss"
                  )}
                </Typography>
              )}
            </Box>
          </AccordionDetails>
        </Accordion>
      </Box>
    </Box>
  );
}
