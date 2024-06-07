import Button from "@mui/material/Button";
import { primary } from "../utils/theme/colors";

interface Type {
  text: string;
}

const AppButton = ({ text }: Type) => {
  return (
    <div>
      {" "}
      <Button
        sx={{
          width: {
            xs: "150px",
          },
          height: "40px",
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
