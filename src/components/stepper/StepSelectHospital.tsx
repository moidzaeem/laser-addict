import { useState } from "react";
import { Box, TextField, Divider, InputAdornment } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { hospitals } from "../../utils/data";
import { Font, Heading } from "../../utils/theme/typo";
import { primary } from "../../utils/theme/colors";

interface StepSelectHospitalProps {
  setSelectedHospital: any;
  selectedHospital: any;
}

const StepSelectHospital = ({
  setSelectedHospital,
  selectedHospital,
}: StepSelectHospitalProps) => {
  const [searchTerm, setSearchTerm] = useState<any>("");
  const [filteredHospitals, setFilteredHospitals] = useState(hospitals);

  const handleSearchChange = (event: { target: { value: any } }) => {
    const value = event.target.value;
    setSearchTerm(value);

    const filtered = hospitals.filter((hospital) =>
      hospital.name.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredHospitals(filtered);
  };

  const handleHospitalClick = (hospital: { id: number; name: string }) => {
    setSelectedHospital(hospital);
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
        value={searchTerm || (selectedHospital && selectedHospital.name)}
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
      <Box className="shadow" sx={{ maxHeight: "200px", overflowY: "auto" }}>
        {filteredHospitals.map((hospital) => (
          <Box
            onClick={() => handleHospitalClick(hospital)}
            key={hospital.id}
            sx={{
              p: 1,
              cursor: "pointer",
              color: selectedHospital === hospital ? primary : "black",
            }}
          >
            <Font sx={{ ml: 2 }}>{hospital.name}</Font>
            <Divider sx={{ my: 1 }} />
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default StepSelectHospital;
