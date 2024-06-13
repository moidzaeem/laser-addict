import { useState } from "react";
import { Box, TextField, InputAdornment, Grid } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { Font, Heading, Label } from "../../utils/theme/typo";
import ServiceCard from "../ServiceCard";
import { services } from "../../utils/data";

interface StepSelectServiceProps {
  setSelectedService: (name: string) => void;
  selectedService: any;
}

const features = [
  {
    title: "1-year warranty",
    description: "Tobacco sessions are guaranteed for one year",
    icon: "icon1",
  },
  {
    title: "A unique method",
    description: "The LaserAddict Method is unique in France",
    icon: "icon2",
  },
  {
    title: "Support",
    description: "We take care of you by accompanying you",
    icon: "icon3",
  },
  {
    title: "A high success rate",
    description: "A customer satisfaction rate close to 90%",
    icon: "icon4",
  },
];

const StepSelectService: React.FC<StepSelectServiceProps> = ({
  setSelectedService,
  selectedService,
}) => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredServices = services.filter((service) =>
    service.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Box sx={{ p: 4 }}>
      <Grid container spacing={2} justifyContent="center" alignItems="center">
        <Grid item xs={12} sm={12} md={8}>
          <Heading sx={{ textAlign: "center" }}>Select a service</Heading>
        </Grid>
        <Grid item xs={12} sm={12} md={4}>
          <TextField
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
        </Grid>
      </Grid>
      <Box sx={{ display: "flex", justifyContent: "center", mt: 2 }}>
        <Grid container spacing={2} justifyContent="center">
          {filteredServices.map((service) => (
            <Grid item key={service.id} xs={12} sm={6} md={3}>
              <ServiceCard
                setSelectedService={setSelectedService}
                service={service}
                selectedService={selectedService}
              />
            </Grid>
          ))}
          {filteredServices.length === 0 && <Font>No Items Found</Font>}
        </Grid>
      </Box>
      <Box sx={{ display: "flex", justifyContent: "center", mt: 4 }}>
        <Box
          sx={{
            p: 3,
            background: "#21A282",
            borderRadius: 3,
            color: "white",
            display: "flex",
            flexDirection: "column",
            width: "100%",
          }}
        >
          <Grid container spacing={2}>
            {features.map(({ title, description }, index) => (
              <Grid
                item
                key={index}
                xs={12}
                sm={6}
                md={3}
                sx={{ display: "flex", alignItems: "center" }}
              >
                <img src="/twin.svg" alt="" />
                <Box ml={2}>
                  <Heading>{title}</Heading>
                  <Label sx={{ color: "white" }}>{description}</Label>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>
    </Box>
  );
};

export default StepSelectService;
