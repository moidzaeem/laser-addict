import React from "react";
import { Box, TextField } from "@mui/material";
import { Font } from "../../utils/theme/typo";

interface StepUserDetailsProps {
  userDetails: {
    name: string;
    email: string;
    phone: string;
  };
  handleUserDetailsChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const StepUserDetails: React.FC<StepUserDetailsProps> = ({
  userDetails,
  handleUserDetailsChange,
}) => {
  return (
    <Box>
      <Font>Information about the User’s Details:</Font>
      <TextField
        label="Name"
        name="name"
        value={userDetails.name}
        onChange={handleUserDetailsChange}
        sx={{ mr: 1, mb: 1 }}
      />
      <TextField
        label="Email"
        name="email"
        value={userDetails.email}
        onChange={handleUserDetailsChange}
        sx={{ mr: 1, mb: 1 }}
      />
      <TextField
        label="Phone"
        name="phone"
        value={userDetails.phone}
        onChange={handleUserDetailsChange}
        sx={{ mr: 1, mb: 1 }}
      />
    </Box>
  );
};

export default StepUserDetails;
