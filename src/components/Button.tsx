import Button from "@mui/material/Button";
import { primary } from "../utils/theme/colors";

interface Type {
  text: string;
  fullWidth?: boolean;
  height?: number;
}

const AppButton = ({ text, fullWidth, height }: Type) => {
  return (
    <div>
      <Button
        sx={{
          width: {
            xs: fullWidth ? "100%" : "150px",
          },
          height: height || "40px",
          mr: 1,
          borderRadius: 3,
          background: primary,

          textTransform: "capitalize",
        }}
        color="success"
        variant="contained"
      >
        {text}
      </Button>
    </div>
  );
};

export default AppButton;
