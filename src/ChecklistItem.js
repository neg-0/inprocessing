import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Box, Button } from "@mui/material";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import { format as formatDate } from "date-fns";

export default function ChecklistItem({ item, markAsComplete }) {
  return (
    <Box sx={{ my: 2 }}>
      <Box className={"Checklist-item" + (item.completed ? "-completed" : "")}>
        <Accordion
          sx={{
            backgroundColor: item.completed ? "#66d688" : "#d6d6e1",
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
                variant={item.completed ? "outlined" : "contained"}
                color={item.completed ? "incomplete" : "complete"}
                onClick={() => markAsComplete(item.id)}
              >
                Mark as {item.completed ? "Incomplete" : "Complete"}
              </Button>
              {item.completed && (
                <Typography variant="body">
                  Completed on{" "}
                  {formatDate(item.completionDate, "MM/dd/yyyy 'at' hh:mm:ss")}
                </Typography>
              )}
            </Box>
          </AccordionDetails>
        </Accordion>
      </Box>
    </Box>
  );
}
