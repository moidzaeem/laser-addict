import { Div } from "../utils/styled-components";
import { Grid } from "@mui/material";
import { Font, Heading } from "../utils/theme/typo";
import AppButton from "../components/Button";
import { Link } from "react-router-dom";
import PublicWrapper from "../utils/layout/PublicWrapper";
import DisclaimerSection from "../components/sections/disclaimer-section";
import DoneIcon from "@mui/icons-material/Done";

const ResetMailSuccessPage: React.FC = () => {
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
                textAlign: "center",
              }}
            >
              <Heading>Reset mail sent </Heading>
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
              <div style={{ height: 50 }} />
              <Font>
                An e-mail containing a password reset link has been sent to your{" "}
                <br />
                address. Click on this link and follow the wizard to set a new
                password.
              </Font>
              <div style={{ height: 30 }} />

              <Link to="/login">
                <AppButton text="Login" height={50} fullWidth />
              </Link>
            </Div>
          </Grid>
          {/* right grid with a button */}
          <DisclaimerSection />
        </Grid>
      </PublicWrapper>
    </div>
  );
};

export default ResetMailSuccessPage;
