import { useState, useEffect, ChangeEvent } from "react";
import axios from "axios";
import {
  Box,
  TextField,
  InputAdornment,
  useMediaQuery,
  useTheme,
  Autocomplete
} from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { Font, Heading } from "../../utils/theme/typo";
import HospitalCard from "../HospitalCard";
import StarIcon from "@mui/icons-material/Star";
import { Hospital } from "../types";

interface StepSelectHospitalProps {
  setSelectedHospital:any
  selectedHospital: Hospital;
}

const StepSelectHospital = ({
  setSelectedHospital,
  selectedHospital,
}: StepSelectHospitalProps) => {
  const [allHospitals, setAllHospitals] = useState<Hospital[]>([]);
  const [displayedHospitals, setDisplayedHospitals] = useState<Hospital[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  useEffect(() => {
    const fetchHospitals = async () => {
      try {
        const response = await axios.get("http://laser-backend.test/api/get-centers");
        if (response.data.success) {
          setAllHospitals(response.data.data);
          setDisplayedHospitals(response.data.data);
        } else {
          setError("Failed to fetch data");
        }
      } catch (error) {
        setError("An error occurred while fetching data");
      } finally {
        setLoading(false);
      }
    };

    fetchHospitals();
  }, []);

  useEffect(() => {
    if (searchTerm === "") {
      setDisplayedHospitals(allHospitals);
    } else {
      const filtered = allHospitals.filter((hospital) =>
        hospital.center_name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setDisplayedHospitals(filtered);
    }
  }, [searchTerm, allHospitals]);

  const handleSearchChange = (_event: ChangeEvent<HTMLInputElement>, newInputValue: string) => {
    setSearchTerm(newInputValue);
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <Box
      sx={{
        width: "100%",
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
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
        <Autocomplete
          freeSolo
          options={displayedHospitals}
          // @ts-ignore
          getOptionLabel={(option) => option.center_name}
          // @ts-ignore
          onInputChange={(event, newInputValue) => handleSearchChange(event, newInputValue)}
          renderInput={(params) => (
            <TextField
              {...params}
              fullWidth
              className="shadow"
              variant="outlined"
              sx={{
                mb: {
                  lg: 2,
                  xs: 6,
                },
                "& .MuiOutlinedInput-notchedOutline": { border: "none" },
                borderRadius: 3,
              }}
              placeholder="Find the nearest center to me"
              InputProps={{
                ...params.InputProps,
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
          )}
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
          {displayedHospitals.length > 0 ? (
            displayedHospitals.map((hospital) => (
              <HospitalCard
                setSelectedHospital={setSelectedHospital}
                key={hospital.id}
                hospital={hospital}
                selectedHospital={selectedHospital}
              />
            ))
          ) : (
            <Font>No Items Found</Font>
          )}
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: {
            lg: "row",
            xs: "column",
          },
          gap: 2,
        }}
      >
        <Box>
          {[1, 2, 3, 4, 5].map((_, index) => (
            <StarIcon key={index} sx={{ fontSize: 20, color: "#FFC107" }} />
          ))}
        </Box>
        <img src="/google.svg" style={{ width: 20 }} alt="Google logo" />
        <img src="/facebook.svg" style={{ width: 20 }} alt="Facebook logo" />

        <Font>A method approved by over 3,000 customers across France</Font>
      </Box>
    </Box>
  );
};

export default StepSelectHospital;
