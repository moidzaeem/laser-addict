import { RainbowColor } from "../utils/layout";
import PublicNavbar from "../components/molecules/PublicNavbar";
import { Div } from "../utils/styled-components";
import { Grid, Paper } from "@mui/material";
import { Caption, Heading } from "../utils/theme/typo";
import { InputField } from "../components/atoms/Input";
import AppButton from "../components/Button";

const LoginPage = () => {
  return (
    <div>
      <RainbowColor
        text={"LaserAddict CRM - V1.0.0a 👇"}
        color={
          "linear-gradient(90deg, rgba(34,163,131,1) 0%, rgba(102,102,102,1) 100%)"
        }
      />
      <PublicNavbar />
      {/* create a responsive grid container */}
      <Grid container>
        {/* left grid with the login form */}
        <Grid item xs={12} md={6}>
          <Div
            sx={{
              display: "flex",
              flexDirection: "column",
              height: "100%",
              p: {
                lg: 10,
                xs: 4,
              },
            }}
          >
            <Heading sx={{ textAlign: "left" }}>
              Log in to the LaserAddict CRM
            </Heading>
            <div style={{ height: 50 }} />
            <Caption>Enter your practitioner identifier below</Caption>
            <div style={{ height: 30 }} />
            <Caption>E-mail address</Caption>
            <div style={{ height: 10 }} />
            <InputField />
            <div style={{ height: 20 }} />
            <Caption>Password</Caption>
            <div style={{ height: 10 }} />
            <InputField type="password" />
            <div style={{ height: 20 }} />
            <AppButton text="Login" height={50} fullWidth />
            <div style={{ height: 40 }} />
            <Div sx={{ display: "flex", justifyContent: "space-between" }}>
              <Caption>Become a partner</Caption>
              <Caption>Forgotten password</Caption>
            </Div>
          </Div>
        </Grid>

        {/* right grid with a button */}
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
              <Caption>
                Access to this customer relationship management (CRM) system and
                all the information it contains is strictly reserved to
                authorized persons. Please note that all connections to this
                system are monitored and recorded. Any unauthorized use will be
                reported to appropriate authority and may result in legal
                action.
              </Caption>
              <div style={{ height: 40 }} />
              <Caption>
                By logging on to this system, you confirm that you are an
                authorized person and that you understand and accept these
                conditions.
              </Caption>
            </Paper>
            <div style={{ height: 70 }} />
            <Div sx={{ display: "flex", justifyContent: "space-between" }}>
              <AppButton text="Assistance" />
              <AppButton text="Legal information" />
            </Div>
          </Div>
        </Grid>
      </Grid>

      <Div
        sx={{
          backgroundImage: "url('/svg/Group 11130.svg')",
          height: {
            lg: 200,
            xs: 50,
          },
          width: "100%",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      <RainbowColor
        text={"Copyright © 2024 SARL CS LAZER ® - All rights reserved"}
        color={"black"}
      />
    </div>
  );
};

export default LoginPage;
