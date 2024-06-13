import React from "react";
import {
  Box,
  TextField,
  styled,
  RadioGroup,
  FormControlLabel,
  Radio,
  Grid,
} from "@mui/material";
import { Font, Heading } from "../../utils/theme/typo";

interface StepUserDetailsProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  userDetails: any;
  handleUserDetailsChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const CustomTextField = styled(TextField)(() => ({
  "& .MuiOutlinedInput-root": {
    borderRadius: 10,
  },
  width: "100%",
}));

const StepUserDetails: React.FC<StepUserDetailsProps> = ({
  userDetails,
  handleUserDetailsChange,
}) => {
  return (
    <Box width={"100%"} p={2}>
      <Heading
        style={{ width: "100%" }}
        sx={{ textAlign: "center", mt: 10, mb: 6 }}
      >
        Please enter your customer details <br /> to attach the session to your
        file.
      </Heading>
      <Font sx={{ textAlign: "center" }}>
        Please enter your e-mail address, your first name and your date of
        birth. If you are already a LaserAddict <br /> customer, the system will
        recognize you and this appointment will be attached to your customer
        file. <br /> If you have never been a LaserAddict customer, please fill
        in the additional fields if requested.
      </Font>
      <Grid container spacing={3} justifyContent="center" sx={{ p: 12 }}>
        <Grid item xs={12} md={6}>
          <Font>Email*</Font>
          <CustomTextField
            sx={{ borderRadius: 10, mt: 2 }}
            name="Email"
            value={userDetails.firstName}
            onChange={handleUserDetailsChange}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <Font>First Name*</Font>
          <CustomTextField
            sx={{ borderRadius: 10, mt: 2 }}
            name="firstName"
            value={userDetails.lastName}
            onChange={handleUserDetailsChange}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <Font>Date of Birth*</Font>
          <CustomTextField
            sx={{ borderRadius: 10, mt: 2 }}
            value={userDetails.email}
            type="datetime-local"
            onChange={handleUserDetailsChange}
          />
        </Grid>
        <Grid item xs={12} md={6}></Grid>
      </Grid>
      <Heading style={{ width: "100%" }} sx={{ textAlign: "center" }}>
        Additional details
      </Heading>
      <Grid
        sx={{ p: 12 }}
        container
        spacing={3}
        justifyContent="center"
        alignItems={"center"}
      >
        <Grid item xs={12} md={6}>
          <Font>Last Name*</Font>
          <CustomTextField
            sx={{ borderRadius: 10, mt: 2 }}
            name="lastName"
            value={userDetails.firstName}
            onChange={handleUserDetailsChange}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <Font>Phone*</Font>
          <CustomTextField
            sx={{ borderRadius: 10, mt: 2 }}
            name="lastName"
            value={userDetails.lastName}
            onChange={handleUserDetailsChange}
            type="number"
          />
        </Grid>
        <Grid item xs={12} md={6} mt={2}>
          <Font>Gender*</Font>
          <RadioGroup
            row
            name="gender"
            value={userDetails.gender}
            onChange={handleUserDetailsChange}
            sx={{ mt: 2 }}
          >
            <FormControlLabel
              value="male"
              control={<Radio sx={{ color: "black" }} />}
              label="Male"
            />
            <FormControlLabel
              value="female"
              control={<Radio sx={{ color: "black", ml: 2, mr: 2 }} />}
              label="Female"
            />
            <FormControlLabel
              value="other"
              control={<Radio sx={{ color: "black" }} />}
              label="Other"
            />
          </RadioGroup>
        </Grid>
        <Grid item xs={12} md={6}>
          <Font>Enter PromoCode*</Font>
          <CustomTextField
            sx={{ borderRadius: 10, mt: 2 }}
            name="phone"
            value={userDetails.phone}
            onChange={handleUserDetailsChange}
            type="number"
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default StepUserDetails;
