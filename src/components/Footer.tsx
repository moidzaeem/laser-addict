import { Box, Grid, Typography, Link, TextField } from "@mui/material";
import {
  Facebook,
  Instagram,
  LinkedIn,
  LocationOn,
  Phone,
  Email,
} from "@mui/icons-material";
import { Font, Heading } from "../utils/theme/typo";
import AppButton from "./Button";
import { primary } from "../utils/theme/colors";

const Footer = () => {
  return (
    <Box sx={{ backgroundColor: "#f5f5f5", p: 6, mt: 6 }}>
      <Grid container spacing={4}>
        <Grid item xs={12} md={3}>
          <Font variant="h6" gutterBottom>
            <img src="/images/logo.png" alt="Logo" style={{ width: "150px" }} />
          </Font>
          <Font variant="body1">
            LASERADDICT® WELLNESS CENTER - LASER SMOKING CESSATION - SUPPORT -
            COACHING
          </Font>
          <Box mt={2}>
            <Heading variant="body1" gutterBottom>
              Reach out to
            </Heading>
            <Box>
              <Link href="#" color="inherit" sx={{ mr: 2 }}>
                <Facebook fontSize="large" />
              </Link>
              <Link href="#" color="inherit" sx={{ mr: 2 }}>
                <Instagram fontSize="large" />
              </Link>
              <Link href="#" color="inherit">
                <LinkedIn fontSize="large" />
              </Link>
            </Box>
          </Box>
        </Grid>
        <Grid item container xs={12} md={6}>
          <Grid item xs={12} md={6}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Heading variant="h6" gutterBottom>
                  Services
                </Heading>
                <Typography variant="body1">
                  <Font>Stop Tobacco / Cannabis</Font>
                </Typography>
                <Font>Health & Wellness</Font>
              </Grid>
              <Grid item xs={12}>
                <Heading variant="h6" gutterBottom>
                  Information
                </Heading>
                <Font>Our Laser Centers</Font>
                <Font>Special Offers</Font>
                <Font>News</Font>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} md={6}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Heading variant="h6" gutterBottom>
                  Helpful Links
                </Heading>
                <Font>Become a Partner</Font>
                <Font>Our Headquarters</Font>
                <Font>News</Font>
              </Grid>
              <Grid item xs={12}>
                <Heading variant="h6" gutterBottom>
                  Legal Information
                </Heading>
                <Font>T.C.S</Font>
                <Font>Terms of Use</Font>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} md={3}>
          <Heading variant="h6" gutterBottom>
            Contact Information
          </Heading>
          <Box display="flex" alignItems="center" mb={1}>
            <LocationOn sx={{ mr: 1 }} />
            <Font>1 Rue des Pins, 38100 Grenoble, France</Font>
          </Box>
          <Box display="flex" alignItems="center" mb={1}>
            <Phone sx={{ mr: 1 }} />
            <Font variant="body1">06 49 56 70 82</Font>
          </Box>
          <Box display="flex" alignItems="center" mb={1}>
            <Email sx={{ mr: 1 }} />
            <Font variant="body1">contact@laseraddict.fr</Font>
          </Box>
          <Box mt={2}>
            <Heading>Our Newsletter</Heading>
            <Font>
              Stay connected and be the first to know. Subscribe to our
              newsletter for exclusive updates.
            </Font>
            <Box>
              <TextField
                fullWidth
                sx={{
                  border: `2px solid ${primary}`,
                  borderRadius: 3,
                  mb: 2,
                  mt: 2,
                }}
                variant="outlined"
                size="small"
                placeholder="Your E-Mail Address"
              />
              <AppButton text="Subscribe" />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Footer;
