import React from "react";
import { Box, TextField } from "@mui/material";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DatePicker from "@mui/lab/DatePicker";
import { Font } from "../../utils/theme/typo";

interface StepSelectDateProps {
  selectedDate: Date | null;
  handleDateChange: (date: Date | null) => void;
}

const StepSelectDate: React.FC<StepSelectDateProps> = ({
  selectedDate,
  handleDateChange,
}) => {
  return (
    <Box>
      <Font>Select Date and Time:</Font>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <DatePicker
          label="Select Date"
          value={selectedDate}
          onChange={handleDateChange}
          renderInput={(params) => <TextField {...params} />}
        />
      </LocalizationProvider>
    </Box>
  );
};

export default StepSelectDate;
