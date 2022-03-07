import { FormControl, Grid, TextField } from "@mui/material";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DatePicker from "@mui/lab/DatePicker";

export default function Heading({ header, updateHeader }) {
  function handleChange(e) {
    updateHeader(e.target.parentElement.textContent, e.target.value);
  }

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={4}>
        <FormControl fullWidth>
          <TextField
            id="header-rank"
            label="Rank"
            value={header["Rank"]}
            onChange={handleChange}
          />
        </FormControl>
      </Grid>
      <Grid item xs={12} md={8}>
        <FormControl fullWidth>
          <TextField
            id="header-name"
            label="Name"
            value={header["Name"]}
            onChange={handleChange}
          />
        </FormControl>
      </Grid>
      <Grid item xs={12} md={3}>
        <FormControl fullWidth>
          <TextField
            label="Duty Phone"
            value={header["Phone"]}
            onChange={handleChange}
          />
        </FormControl>
      </Grid>
      <Grid item xs={12} md={3}>
        <FormControl fullWidth>
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DatePicker
              label="Date of Arrival"
              value={header["Date of Arrival"]}
              onChange={(newValue) => updateHeader("Date of Arrival", newValue)}
              renderInput={(params) => <TextField {...params} />}
            />
          </LocalizationProvider>
        </FormControl>
      </Grid>
      <Grid item xs={12} md={3}>
        <FormControl fullWidth>
          <TextField
            label="Office Symbol"
            value={header["Office Symbol"]}
            onChange={handleChange}
          />
        </FormControl>
      </Grid>
      <Grid item xs={12} md={3}>
        <FormControl fullWidth>
          <TextField
            label="Supervisor"
            value={header["Supervisor"]}
            onChange={handleChange}
          />
        </FormControl>
      </Grid>
    </Grid>
  );
}
