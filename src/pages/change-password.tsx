import { Div } from "../utils/styled-components";
import { Grid, IconButton } from "@mui/material";
import { Caption, Font, Heading } from "../utils/theme/typo";
import { InputField } from "../components/atoms/Input";
import AppButton from "../components/Button";
import { Link } from "react-router-dom";
import PublicWrapper from "../utils/layout/PublicWrapper";
import DisclaimerSection from "../components/sections/disclaimer-section";
import LockOpenIcon from "@mui/icons-material/LockOpen";
import { primary } from "../utils/theme/colors";

const ChangePasswordPage: React.FC = () => {
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
              <Font>New Password</Font>
              <div style={{ height: 10 }} />
              <InputField type="password" />
              <div style={{ height: 20 }} />
              <Font>Confirm Password</Font>
              <div style={{ height: 10 }} />
              <InputField type="password" />
              <div style={{ height: 20 }} />
              <Link to="/reset-mail-success">
                <AppButton
                  text="Confirm Password Change"
                  height={50}
                  fullWidth
                />
              </Link>
              <div style={{ height: 80 }} />
              <Div sx={{ display: "flex", justifyContent: "space-between" }}>
                <MiniIcon text={"8 characters minimum"} />
                <MiniIcon text={"Upper and lower case+ Special characters"} />
                <MiniIcon text={"Passwords are different"} />
              </Div>
            </Div>
          </Grid>

          {/* right grid with a button */}
          <DisclaimerSection />
        </Grid>
      </PublicWrapper>
    </div>
  );
};

export default ChangePasswordPage;

interface MiniProp {
  text: string;
}

const MiniIcon: React.FC<MiniProp> = ({ text }) => {
  return (
    <Div
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
      }}
    >
      <IconButton
        sx={{ background: primary, borderRadius: 2, color: "white", mb: 2 }}
      >
        <LockOpenIcon />
      </IconButton>
      <Caption>{text}</Caption>
    </Div>
  );
};
