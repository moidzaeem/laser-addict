import { styled } from "@mui/system";
import TextField from "@mui/material/TextField";
import { primary, secondary } from "../../utils/theme/colors";

// Custom styling for the TextField
export const InputField = styled(TextField)(() => ({
  "& .MuiInputBase-root": {
    fontSize: "12px",
    height: 40,
  },
  "& .MuiInputBase-input": {
    padding: "8px 12px",
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "C2C7D1",
    },
    "&:hover fieldset": {
      borderColor: secondary,
    },
    "&.Mui-focused fieldset": {
      borderColor: primary,
    },
  },
}));
