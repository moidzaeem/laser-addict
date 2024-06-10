import React from "react";
import { Box, TextField, InputAdornment } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { Heading } from "../../utils/theme/typo";
import ServiceCard from "../ServiceCard";
import { services } from "../../utils/data";

interface StepSelectServiceProps {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
}

const StepSelectService: React.FC<StepSelectServiceProps> = ({
  searchTerm,
  setSearchTerm,
}) => {
  const filteredServices = services.filter((service) =>
    service.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Box sx={{ p: 4 }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          pt: 10,
          pb: 10,
        }}
      >
        <div style={{ width: "100%" }} />
        <Heading style={{ width: "100%" }} sx={{ textAlign: "center" }}>
          Select a service
        </Heading>
        <TextField
          style={{ width: "100%" }}
          className="shadow"
          fullWidth
          variant="outlined"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search"
          sx={{
            "& .MuiOutlinedInput-notchedOutline": { border: "none" },
          }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
        />
      </Box>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          {filteredServices.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default StepSelectService;
