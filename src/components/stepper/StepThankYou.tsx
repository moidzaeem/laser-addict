import React from "react";
import Box from "@mui/material/Box";
import { Font, Heading } from "../../utils/theme/typo";
import { Div } from "../../utils/styled-components";
import { primary } from "../../utils/theme/colors";
import { Button } from "@mui/material";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import DoneIcon from "@mui/icons-material/Done";

const StepThankYou: React.FC = () => {
  return (
    <Box>
      <Heading
        style={{ width: "100%" }}
        sx={{ textAlign: "center", mt: 10, mb: 4 }}
      >
        Appointment confirmed
      </Heading>
      <Font sx={{ textAlign: "center" }}>
        Thank you for making an appointment with your LaserAddict center. Your
        appointment <br /> is now confirmed.
      </Font>
      <Font sx={{ textAlign: "center" }}>
        You will receive an e-mail with the details of your appointment and a
        link to modify or <br /> cancel it.
      </Font>
      <Div display={"flex"} justifyContent={"center"} mt={12} gap={3}>
        <Div
          sx={{
            height: 100,
            width: 100,
            p: 3,
            background: "#C7E6C8",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: "100%",
          }}
        >
          <DoneIcon color="success" sx={{ fontSize: 70 }} />
        </Div>
      </Div>
      <Div
        justifyContent={"center"}
        mt={12}
        gap={3}
        mb={10}
        sx={{
          display: {
            lg: "flex",
            xs: "flex",
          },
          flexDirection: {
            lg: "row",
            xs: "column",
          },
        }}
      >
        <Button
          onClick={() => window.location.reload()}
          startIcon={<PictureAsPdfIcon />}
          sx={{
            width: {
              lg: "220px",
              xs: "100%",
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
          Download PDF
        </Button>
        <Button
          startIcon={<CalendarMonthIcon />}
          sx={{
            width: {
              lg: "220px",
              xs: "100%",
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
          Add it to my calendar
        </Button>
      </Div>
    </Box>
  );
};

export default StepThankYou;
