import {
  Box,
  Container,
  Typography,
  Grid,
  Divider,
  IconButton,
} from "@mui/material";
import {
  AccessTime,
  CalendarToday,
  Person,
  Phone,
  Email,
} from "@mui/icons-material";
import { Font, Heading, Label } from "../../utils/theme/typo";
import SettingsIcon from "@mui/icons-material/Settings";
import Star from "@mui/icons-material/Star";

const StepCompletion = () => {
  return (
    <Container maxWidth="md" sx={{ mt: 4, px: { xs: 2, sm: 3 } }}>
      <Heading
        style={{ width: "100%" }}
        sx={{ textAlign: "center", mt: 10, mb: 6, lineHeight: 3 }}
      >
        Appointment confirmation
      </Heading>

      <Grid container>
        <Grid item xs={12} md={6}>
          <Heading variant="h6">Center Information</Heading>
          <Box display="flex" alignItems="center" mt={2}>
            <Box>
              <Font>LaserAddict Grenoble</Font>
              <Font>1 Rue des Pins</Font>
              <Font>38000, Grenoble</Font>
            </Box>
          </Box>
          <Divider sx={{ my: 6 }} />
          <Heading variant="h6">Client Info</Heading>
          <Box display="flex" alignItems="center" gap={3} mt={2}>
            <Box display={"flex"} flexDirection={"column"} gap={3}>
              <Box display="flex" alignItems="center" mt={1}>
                <IconButton sx={{ background: "#79CFA0" }}>
                  <Phone sx={{ color: "white" }} />
                </IconButton>
                <Typography ml={1}>Lorem Ipsum dolor</Typography>
              </Box>
              <Box display="flex" alignItems="center" mt={1}>
                <IconButton sx={{ background: "#79CFA0" }}>
                  <Phone sx={{ color: "white" }} />
                </IconButton>
                <Typography ml={1}>+97 123 456 78</Typography>
              </Box>
              <Box display="flex" alignItems="center" mt={1}>
                <IconButton sx={{ background: "#79CFA0" }}>
                  <Email sx={{ color: "white" }} />
                </IconButton>
                <Typography ml={1}>loremipsum@gmail.com</Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  gap: 3,
                  mt: 3,
                  alignItems: "center",
                  flexWrap: "wrap",
                }}
              >
                {[1, 2].map((_, index) => (
                  <Box
                    key={index}
                    sx={{
                      border: "1px solid grey",
                      display: "flex",
                      alignItems: "center",
                      p: 1,
                      borderRadius: 2,
                      gap: 0.5,
                    }}
                  >
                    <img src="/google.svg" alt="" style={{ height: "20px" }} />
                    <Star sx={{ color: "#FFC107" }} /> <Font>5.0</Font>
                  </Box>
                ))}
              </Box>
              <Font>
                Over 1000+ clients have recovered their habits successfully.
              </Font>
            </Box>
          </Box>
        </Grid>
        <Grid
          className="shadow"
          item
          xs={12}
          md={6}
          sx={{
            p: 3,
            borderRadius: 4,
            mt: {
              lg: 0,
              xs: 12,
            },
          }}
        >
          <Box>
            <Heading variant="h6" mb={5} mt={2}>
              Summary
            </Heading>
            <Box
              sx={{ display: "flex", flexDirection: "column", gap: 2 }}
              mt={2}
            >
              <Box display="flex" alignItems="center">
                <IconButton sx={{ background: "#79CFA0" }}>
                  <Person sx={{ color: "white" }} />
                </IconButton>
                <Box ml={2}>
                  <Font>Practitioner</Font>
                  <Label>Christel Bongiorno</Label>
                </Box>
              </Box>
              <Box display="flex" alignItems="center" mt={2}>
                <IconButton sx={{ background: "#79CFA0" }}>
                  <CalendarToday sx={{ color: "white" }} />
                </IconButton>
                <Box ml={2}>
                  <Font>Date</Font>
                  <Label>Wednesday, 17 April 2024</Label>
                </Box>
              </Box>
              <Box display="flex" alignItems="center" mt={2}>
                <IconButton sx={{ background: "#79CFA0" }}>
                  <AccessTime sx={{ color: "white" }} />
                </IconButton>
                <Box ml={2}>
                  <Font>Start time</Font>
                  <Label>Wednesday, 17 April 2024</Label>
                </Box>
              </Box>
              <Divider sx={{ my: 2 }} />
              <Box display="flex" alignItems="center" mt={2}>
                <IconButton sx={{ background: "#79CFA0" }}>
                  <SettingsIcon sx={{ color: "white" }} />
                </IconButton>
                <Box ml={2}>
                  <Font>Laser session</Font>
                  <Label>Stop Cannabis</Label>
                  <Label>Duration 1 hour</Label>
                </Box>
                <Box ml="auto">
                  <Typography>€ 290</Typography>
                </Box>
              </Box>
              <Divider sx={{ my: 5 }} />
              <Box display="flex" justifyContent="space-between">
                <Heading variant="h6">Total</Heading>
                <Font variant="h6">€ 290</Font>
              </Box>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default StepCompletion;
