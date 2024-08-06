import { useState, useEffect, ChangeEvent } from "react";
import axios from "axios";
import { Box, TextField, InputAdornment, Grid } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { Font, Heading, Label } from "../../utils/theme/typo";
import ServiceCard from "../ServiceCard";
import { Hospital, Service } from "../types";

interface StepSelectServiceProps {
  setSelectedService: (name: string) => void;
  selectedService: Service | undefined;
  selectedHospital: Hospital | undefined; // Add this to get the selected hospital ID
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
  selectedHospital,
}) => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [services, setServices] = useState<Service[]>([]);
  const [filteredServices, setFilteredServices] = useState<Service[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (selectedHospital === null) return;

    const fetchServices = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          `http://laser-backend.test/api/get-center-services?center_id=${selectedHospital?.id}`
        );
        if (response.data.success) {
          setServices(response.data.data);
        } else {
          setError("Failed to fetch services");
        }
      } catch (error) {
        setError("An error occurred while fetching services");
      } finally {
        setLoading(false);
      }
    };

    fetchServices();
  }, [selectedHospital]);

  useEffect(() => {
    setFilteredServices(
      services.filter((service) =>
        service.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
  }, [searchTerm, services]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <Box
      sx={{
        p: {
          lg: 4,
          xs: 2,
        },
      }}
    >
      <Grid container spacing={2} justifyContent="center" alignItems="center">
        <Grid item xs={12} sm={12} md={8}>
          <Heading
            sx={{
              textAlign: "center",
              mt: {
                lg: 0,
                xs: 6,
              },
              mb: {
                lg: 0,
                xs: 6,
              },
            }}
          >
            Select a service
          </Heading>
        </Grid>
        <Grid item xs={12} sm={12} md={4}>
          <TextField
            fullWidth
            variant="outlined"
            value={searchTerm}
            onChange={(e: ChangeEvent<HTMLInputElement>) => setSearchTerm(e.target.value)}
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
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          mt: {
            lg: 2,
            xs: 5,
          },
        }}
      >
        <Grid container spacing={2} justifyContent="center">
          {filteredServices.length > 0 ? (
            filteredServices.map((service) => (
              <Grid item key={service.id} xs={12} sm={6} md={3}>
                <ServiceCard
                  setSelectedService={setSelectedService}
                  service={service}
                   // @ts-ignore
                  selectedService={selectedService}
                />
              </Grid>
            ))
          ) : (
            <Font>No Items Found</Font>
          )}
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
