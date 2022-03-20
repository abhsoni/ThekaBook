import React, { useState } from "react";
// import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";

import TextField from "@mui/material/TextField";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DatePicker from "@mui/lab/DatePicker";
import DateAdapter from "@mui/lab/AdapterDateFns";
// import { useState } from "react";

function DatePick(props) {
  const { date, changedDate } = props;
  // const [value, setValue] = useState(null);
  return (
    <section className="date">
      <div className="container">
        <div style={{ paddingTop: "16px" }}>
          <h3>Report Date</h3>
        </div>
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <DatePicker
            label="mm/dd/yyyy"
            value={date}
            onChange={(newValue) => {
              changedDate(newValue);
            }}
            renderInput={(params) => <TextField {...params} />}
          />
        </LocalizationProvider>
      </div>
    </section>
  );
}
export default DatePick;
