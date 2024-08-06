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

interface UserDetails {
  email: string;
  firstName: string;
  lastName: string;
  dateOfBirth: string;
  phone?: string;
  gender?: string;
}

interface StepUserDetailsProps {
  userDetails: UserDetails;
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
    <Box width="100%">
      <Heading sx={{ textAlign: "center", mt: 10, mb: 6 }}>
        Please enter your customer details <br /> to attach the session to your
        file.
      </Heading>
      <Font sx={{ textAlign: "center", mb: 5 }}>
        Please enter your e-mail address, your first name and your date of
        birth. If you are already a LaserAddict <br /> customer, the system will
        recognize you and this appointment will be attached to your customer
        file. <br /> If you have never been a LaserAddict customer, please fill
        in the additional fields if requested.
      </Font>
      <Grid
        container
        spacing={3}
        justifyContent="center"
        sx={{ p: { lg: 12, xs: 2 } }}
      >
        <Grid item xs={12} md={6}>
          <Font>Email*</Font>
          <CustomTextField
            sx={{ mt: 2 }}
            name="email"
            value={userDetails.email}
            onChange={handleUserDetailsChange}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <Font>First Name*</Font>
          <CustomTextField
            sx={{ mt: 2 }}
            name="firstName"
            value={userDetails.firstName}
            onChange={handleUserDetailsChange}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <Font>Date of Birth*</Font>
          <CustomTextField
            sx={{ mt: 2 }}
            name="dateOfBirth"
            value={userDetails.dateOfBirth}
            type="date" // Adjust if needed
            onChange={handleUserDetailsChange}
          />
        </Grid>
        <Grid item xs={12} md={6}></Grid>
      </Grid>
      <Heading sx={{ textAlign: "center", mb: 6 }}>
        Additional details
      </Heading>
      <Grid
        container
        spacing={3}
        justifyContent="center"
        alignItems="center"
        sx={{ p: { lg: 12, xs: 2 } }}
      >
        <Grid item xs={12} md={6}>
          <Font>Last Name*</Font>
          <CustomTextField
            sx={{ mt: 2 }}
            name="lastName"
            value={userDetails.lastName}
            onChange={handleUserDetailsChange}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <Font>Phone*</Font>
          <CustomTextField
            sx={{ mt: 2 }}
            name="phone"
            value={userDetails.phone || ''}
            onChange={handleUserDetailsChange}
            type="tel"
          />
        </Grid>
        <Grid item xs={12} md={6} mt={2}>
          <Font>Gender*</Font>
          <RadioGroup
            row
            name="gender"
            value={userDetails.gender || ''}
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
              control={<Radio sx={{ color: "black", mx: 2 }} />}
              label="Female"
            />
            <FormControlLabel
              value="other"
              control={<Radio sx={{ color: "black" }} />}
              label="Other"
            />
          </RadioGroup>
        </Grid>
        {/* Uncomment and add promoCode if needed */}
        {/* <Grid item xs={12} md={6}>
          <Font>Enter PromoCode*</Font>
          <CustomTextField
            sx={{ mt: 2 }}
            name="promoCode"
            value={userDetails.promoCode || ''}
            onChange={handleUserDetailsChange}
          />
        </Grid> */}
      </Grid>
    </Box>
  );
};

export default StepUserDetails;
