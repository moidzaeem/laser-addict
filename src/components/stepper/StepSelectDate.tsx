import { Box } from "@mui/material";
import { Heading } from "../../utils/theme/typo";
import AppDateRangePicker from "../DatePicker";

interface StepSelectDateProps {
  setSelectedDate: any;
}

const StepSelectDate: React.FC<StepSelectDateProps> = ({ setSelectedDate }) => {
  return (
    <Box>
      <Heading
        style={{ width: "100%" }}
        sx={{ textAlign: "center", mt: 10, mb: 4 }}
      >
        Select Date and Time:
      </Heading>
      <AppDateRangePicker
       // @ts-ignore
       setGetDateRange={setSelectedDate} />
    </Box>
  );
};

export default StepSelectDate;
