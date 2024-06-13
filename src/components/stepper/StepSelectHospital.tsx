/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import {
  Box,
  TextField,
  InputAdornment,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { hospitals } from "../../utils/data";
import { Font, Heading } from "../../utils/theme/typo";
import HospitalCard from "../HospitalCard";
import StarIcon from "@mui/icons-material/Star";

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
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const handleSearchChange = (event: { target: { value: any } }) => {
    const value = event.target.value;
    setSearchTerm(value);

    const filtered = hospitals.filter((hospital) =>
      hospital.name.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredHospitals(filtered);
  };

  return (
    <Box
      sx={{
        width: "100%",
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        justifyItems: "center",
        alignItems: "center",
        padding: isSmallScreen ? 2 : 4,
      }}
    >
      <Box sx={{ width: { lg: "40%", xs: "100%" } }}>
        <Heading
          sx={{ mt: isSmallScreen ? 6 : 12, mb: 4, textAlign: "center" }}
        >
          Choose a center
        </Heading>
        <TextField
          fullWidth
          className="shadow"
          variant="outlined"
          sx={{
            mb: 2,
            "& .MuiOutlinedInput-notchedOutline": { border: "none" },
            borderRadius: 3,
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
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          boxShadow: "0px 6.71px 18.31px 12.21px rgba(0, 0, 0, 0.04)",
          p: {
            lg: 6,
            xs: 2,
          },
          mt: 4,
          mb: {
            lg: 6,
            xs: 2,
          },
          borderRadius: 6,
          m: {
            lg: 6,
            xs: 2,
          },
          width: "100%",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            width: "100%",
            maxWidth: "100%",
            minWidth: "100%",
          }}
        >
          {filteredHospitals.map((hospital) => (
            <HospitalCard
              setSelectedHospital={setSelectedHospital}
              key={hospital.id}
              hospital={hospital}
              selectedHospital={selectedHospital}
            />
          ))}

          <Font>{filteredHospitals.length === 0 && "No Items Found"}</Font>
        </Box>
      </Box>
      <Box sx={{ display: "flex", alignItems: "center" }}>
        {[1, 2, 3, 4, 5].map(() => (
          <StarIcon sx={{ fontSize: 20, color: "#FFC107" }} />
        ))}
        <img
          src="/google.svg"
          style={{ width: 20, marginLeft: 10, marginRight: 10 }}
          alt=""
        />
        <img
          src="/facebook.svg"
          style={{ width: 20, marginRight: 10 }}
          alt=""
        />

        <Font>A method approved by over 3,000 customers across France</Font>
      </Box>
    </Box>
  );
};

export default StepSelectHospital;
