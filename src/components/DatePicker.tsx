import { useState } from "react";
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { alpha, primary } from "../utils/theme/colors";

interface Pro {
  setGetDateRange: any;
}

const DatePicker = ({ setGetDateRange }: Pro) => {
  const [state, setState] = useState<any>([
    {
      startDate: new Date(),
      endDate: null,
      key: "selection",
    },
  ]);

  const handleChange = (item: any) => {
    setState([item.selection]);
    setGetDateRange("[item.selection]");
  };
  return (
    <div>
      <DateRange
        editableDateInputs={true}
        onChange={(item) => handleChange(item)}
        moveRangeOnFirstSelection={false}
        ranges={state}
        rangeColors={[primary, alpha]}
        style={{ background: "#FAFAFA", borderRadius: 10, width: "500px" }}
      />
    </div>
  );
};

export default DatePicker;
