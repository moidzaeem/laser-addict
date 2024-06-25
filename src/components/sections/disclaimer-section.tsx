import React from "react";
import { Grid, Paper } from "@mui/material";
import { Font, Heading } from "../../utils/theme/typo";
import { Div } from "../../utils/styled-components";
import AppButton from "../Button";

const DisclaimerSection: React.FC = () => {
  return (
    <Grid sx={{ background: "#D3EDE6" }} item xs={12} md={6}>
      <Div
        sx={{
          display: "flex",
          flexDirection: "column",
          height: "100%",
          p: {
            lg: 10,
            xs: 4,
          },
          textAlign: "center",
        }}
      >
        <Paper
          className="shadow"
          sx={{ background: "white", p: 5, borderRadius: 12 }}
        >
          <Heading>Disclaimer</Heading>
          <div style={{ height: 20 }} />
          <Font>
            Access to this customer relationship management (CRM) system and all
            the information it contains is strictly reserved to authorized
            persons. Please note that all connections to this system are
            monitored and recorded. Any unauthorized use will be reported to
            appropriate authority and may result in legal action.
          </Font>
          <div style={{ height: 40 }} />
          <Font>
            By logging on to this system, you confirm that you are an authorized
            person and that you understand and accept these conditions.
          </Font>
        </Paper>
        <div style={{ height: 70 }} />
        <Div sx={{ display: "flex", justifyContent: "space-between" }}>
          <AppButton text="Assistance" />
          <AppButton text="Legal information" />
        </Div>
      </Div>
    </Grid>
  );
};

export default DisclaimerSection;
