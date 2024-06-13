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
        Enter your details to get registered
      </Heading>
      <Grid container spacing={3} justifyContent="center">
        <Grid item xs={12} md={6}>
          <Font>First Name*</Font>
          <CustomTextField
            sx={{ borderRadius: 10, mt: 2 }}
            label="First Name"
            name="firstName"
            value={userDetails.firstName}
            onChange={handleUserDetailsChange}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <Font>Last Name*</Font>
          <CustomTextField
            sx={{ borderRadius: 10, mt: 2 }}
            label="Last Name"
            name="lastName"
            value={userDetails.lastName}
            onChange={handleUserDetailsChange}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <Font>Your Email*</Font>
          <CustomTextField
            sx={{ borderRadius: 10, mt: 2 }}
            label="Email"
            name="email"
            value={userDetails.email}
            onChange={handleUserDetailsChange}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <Font>Phone*</Font>
          <CustomTextField
            sx={{ borderRadius: 10, mt: 2 }}
            label="Phone"
            name="phone"
            value={userDetails.phone}
            onChange={handleUserDetailsChange}
            type="number"
          />
        </Grid>
        <Grid item xs={12}>
          <Font>Gender*</Font>
          <RadioGroup
            row
            name="gender"
            value={userDetails.gender}
            onChange={handleUserDetailsChange}
          >
            <FormControlLabel
              value="male"
              control={<Radio sx={{ color: "black" }} />}
              label="Male"
            />
            <FormControlLabel
              value="female"
              control={<Radio sx={{ color: "black" }} />}
              label="Female"
            />
            <FormControlLabel
              value="other"
              control={<Radio sx={{ color: "black" }} />}
              label="Other"
            />
          </RadioGroup>
        </Grid>
      </Grid>
    </Box>
  );
};

export default StepUserDetails;
