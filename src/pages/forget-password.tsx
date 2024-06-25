import { Div } from "../utils/styled-components";
import { Grid } from "@mui/material";
import { Caption, Font, Heading } from "../utils/theme/typo";
import { InputField } from "../components/atoms/Input";
import AppButton from "../components/Button";
import { Link } from "react-router-dom";
import PublicWrapper from "../utils/layout/PublicWrapper";
import DisclaimerSection from "../components/sections/disclaimer-section";

const ForgetPasswordPage: React.FC = () => {
  return (
    <div>
      <PublicWrapper>
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
              <Font>
                Enter your username and your center name <br /> to receive a
                password recovery e-mail.
              </Font>
              <div style={{ height: 30 }} />
              <Font>E-mail address</Font>
              <div style={{ height: 10 }} />
              <InputField />
              <div style={{ height: 20 }} />
              <Font> LaserAddict - Grenoble</Font>
              <div style={{ height: 10 }} />
              <InputField />
              <div style={{ height: 20 }} />
              <Link to="/change-password">
                <AppButton text="Reset your password" height={50} fullWidth />
              </Link>
              <div style={{ height: 40 }} />
              <Caption>Become a partner</Caption>
            </Div>
          </Grid>

          {/* right grid with a button */}
          <DisclaimerSection />
        </Grid>
      </PublicWrapper>
    </div>
  );
};

export default ForgetPasswordPage;
