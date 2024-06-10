import React, { useState } from "react";
import { Box, TextField, Divider, InputAdornment } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { hospitals } from "../../utils/data";
import { Font, Heading } from "../../utils/theme/typo";

const StepSelectHospital = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredHospitals, setFilteredHospitals] = useState(hospitals);

  const handleSearchChange = (event: { target: { value: unknown } }) => {
    const value = event.target.value;
    setSearchTerm(value);

    const filtered = hospitals.filter((hospital) =>
      hospital.name.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredHospitals(filtered);
  };

  return (
    <Box sx={{ width: { lg: "40%", xs: "100%" } }}>
      <Heading sx={{ mt: 12, mb: 4, textAlign: "center" }}>
        Select the nearest center
      </Heading>
      <TextField
        fullWidth
        className="shadow"
        variant="outlined"
        sx={{
          mb: 2,
          "& .MuiOutlinedInput-notchedOutline": { border: "none" },
        }}
        placeholder="Find the nearest center to me"
        value={searchTerm}
        onChange={handleSearchChange}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <LocationOnIcon />
            </InputAdornment>
          ),
          endAdornment: (
            <InputAdornment position="end">
              <ArrowDropDownIcon />
            </InputAdornment>
          ),
        }}
      />
      <Box className="shadow" sx={{ maxHeight: "400px", overflowY: "auto" }}>
        {filteredHospitals.map((hospital) => (
          <Box key={hospital.id} sx={{ p: 1 }}>
            <Font sx={{ ml: 2 }}>{hospital.name}</Font>
            <Divider sx={{ my: 1 }} />
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default StepSelectHospital;
