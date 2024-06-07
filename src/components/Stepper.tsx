import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import TextField, {
  FilledTextFieldProps,
  OutlinedTextFieldProps,
  StandardTextFieldProps,
  TextFieldVariants,
} from "@mui/material/TextField";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DatePicker from "@mui/lab/DatePicker";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { Div } from "../utils/styled-components";
import { Font, Heading } from "../utils/theme/typo";
import { primary } from "../utils/theme/colors";
import { Divider, InputAdornment } from "@mui/material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import StepLabel from "@mui/material/StepLabel";
import StepConnector, {
  stepConnectorClasses,
} from "@mui/material/StepConnector";
import { styled } from "@mui/material/styles";
import { StepIconProps } from "@mui/material/StepIcon";
import BusinessCenterOutlinedIcon from "@mui/icons-material/BusinessCenterOutlined";
import MedicalServicesOutlinedIcon from "@mui/icons-material/MedicalServicesOutlined";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import BadgeOutlinedIcon from "@mui/icons-material/BadgeOutlined";
import ThumbUpAltOutlinedIcon from "@mui/icons-material/ThumbUpAltOutlined";
import { JSX } from "react/jsx-runtime";
const steps = [
  "Select the Nearest Center",
  "Select a Service",
  "Select Date and Time",
  "Information about the User’s Details",
  "Confirmation",
];

const services = [
  "Service 1",
  "Service 2",
  "Service 3",
  "Service 4",
  "Service 5",
];

const hospitals = [
  { id: 1, name: "Ariege" },
  { id: 2, name: "Bouches - Du - Rhone" },
  { id: 3, name: "Corse" },
  { id: 4, name: "Haute - Savoie" },
  { id: 5, name: "Isere" },
];

export default function AppStepper() {
  const [activeStep, setActiveStep] = React.useState(0);
  const [completed, setCompleted] = React.useState<{ [k: number]: boolean }>(
    {}
  );
  const [selectedHospital, setSelectedHospital] = React.useState("");
  const [hospitalFilter, setHospitalFilter] = React.useState("");
  const [selectedService, setSelectedService] = React.useState("");
  const [selectedDate, setSelectedDate] = React.useState<Date | null>(null);
  const [userDetails, setUserDetails] = React.useState({
    name: "",
    email: "",
    phone: "",
  });

  const totalSteps = () => steps.length;
  const completedSteps = () => Object.keys(completed).length;
  const isLastStep = () => activeStep === totalSteps() - 1;
  const allStepsCompleted = () => completedSteps() === totalSteps();

  const handleNext = () => {
    if (!validateStep()) return;
    const newActiveStep =
      isLastStep() && !allStepsCompleted()
        ? steps.findIndex((_, i) => !(i in completed))
        : activeStep + 1;
    setActiveStep(newActiveStep);
  };

  const handleBack = () =>
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  const handleReset = () => {
    setActiveStep(0);
    setCompleted({});
    setSelectedHospital("");
    setSelectedService("");
    setSelectedDate(null);
    setUserDetails({ name: "", email: "", phone: "" });
  };

  const validateStep = () => {
    switch (activeStep) {
      case 0:
        if (!selectedHospital) {
          alert("Please select a hospital before proceeding.");
          return false;
        }
        break;
      case 1:
        if (!selectedService) {
          alert("Please select a service before proceeding.");
          return false;
        }
        break;
      case 2:
        if (!selectedDate) {
          alert("Please select a date before proceeding.");
          return false;
        }
        break;
      case 3:
        if (!userDetails.name || !userDetails.email || !userDetails.phone) {
          alert("Please fill in all user details before proceeding.");
          return false;
        }
        break;
      default:
        break;
    }
    return true;
  };

  const handleDateChange = (date: Date | null) => setSelectedDate(date);

  const handleUserDetailsChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setUserDetails({ ...userDetails, [event.target.name]: event.target.value });
  };

  const handleSelectChange = (setter) => (event) => {
    setter(event.target.value);
  };

  const StepContent = () => {
    switch (activeStep) {
      case 0:
        return (
          <Box sx={{ width: { lg: "40%", xs: "100%" } }}>
            <Heading sx={{ mt: 12, mb: 4, textAlign: "center" }}>
              Select the nearest center
            </Heading>
            <TextField
              fullWidth
              className="shadow"
              variant="outlined"
              value={hospitalFilter}
              onChange={(e) => setHospitalFilter(e.target.value)}
              sx={{
                mb: 2,
                "& .MuiOutlinedInput-notchedOutline": { border: "none" },
              }}
              placeholder="Find the nearest center to me"
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
            <Box
              className="shadow"
              sx={{ maxHeight: "200px", overflowY: "auto" }}
            >
              {hospitals
                .filter((hospital) =>
                  hospital.name
                    .toLowerCase()
                    .includes(hospitalFilter.toLowerCase())
                )
                .map((hospital) => (
                  <Box
                    onClick={() => setSelectedHospital(hospital.name)}
                    key={hospital.id}
                    sx={{ p: 1 }}
                  >
                    <Font sx={{ ml: 2 }}>{hospital.name}</Font>
                    <Divider sx={{ my: 1 }} />
                  </Box>
                ))}
            </Box>
          </Box>
        );
      case 1:
        return (
          <Box>
            <Typography>Select a Service:</Typography>
            <Select
              value={selectedService}
              onChange={handleSelectChange(setSelectedService)}
              sx={{ minWidth: 120 }}
            >
              {services.map((service) => (
                <MenuItem key={service} value={service}>
                  {service}
                </MenuItem>
              ))}
            </Select>
          </Box>
        );
      case 2:
        return (
          <Box>
            <Typography>Select Date and Time:</Typography>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <DatePicker
                label="Select Date"
                value={selectedDate}
                onChange={handleDateChange}
                renderInput={(
                  params: JSX.IntrinsicAttributes & {
                    variant?: TextFieldVariants | undefined;
                  } & Omit<
                      | FilledTextFieldProps
                      | OutlinedTextFieldProps
                      | StandardTextFieldProps,
                      "variant"
                    >
                ) => <TextField {...params} />}
              />
            </LocalizationProvider>
          </Box>
        );
      case 3:
        return (
          <Box>
            <Typography>Information about the User’s Details:</Typography>
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
      case 4:
        return (
          <Typography variant="h5" sx={{ mt: 2, mb: 1 }}>
            Thank you for your submission!
          </Typography>
        );
      default:
        return null;
    }
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Stepper
        nonLinear
        activeStep={activeStep}
        alternativeLabel
        connector={<ColorlibConnector />}
      >
        {steps.map((label, index) => (
          <Step key={label} completed={completed[index]}>
            <StepLabel StepIconComponent={ColorlibStepIcon}>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>

      <Div
        sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
      >
        <StepContent />
        {allStepsCompleted() ? (
          <>
            <Typography sx={{ mt: 2, mb: 1 }}>
              All steps completed - you&apos;re finished
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
              <Box sx={{ flex: "1 1 auto" }} />
              <Button onClick={handleReset}>Reset</Button>
            </Box>
          </>
        ) : (
          <Box sx={{ display: "flex", flexDirection: "row", pt: 24, pb: 8 }}>
            <Button
              sx={{
                width: "200px",
                mr: 1,
                borderRadius: 3,
                background: primary,
                textTransform: "capitalize",
              }}
              color="success"
              variant="contained"
              onClick={handleNext}
            >
              {isLastStep() ? "Finish" : "Next"}
            </Button>
            <Button
              sx={{
                width: "200px",
                mr: 1,
                borderRadius: 3,
                textTransform: "capitalize",
              }}
              variant="contained"
              disabled={activeStep === 0}
              onClick={handleBack}
            >
              Back
            </Button>
            <Box sx={{ flex: "1 1 auto" }} />
          </Box>
        )}
      </Div>
    </Box>
  );
}
const ColorlibConnector = styled(StepConnector)(({ theme }) => ({
  [`&.${stepConnectorClasses.alternativeLabel}`]: {
    top: 22,
  },
  [`&.${stepConnectorClasses.active}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      backgroundImage:
        "linear-gradient( 95deg,rgb(242,113,33) 0%,rgb(233,64,87) 50%,rgb(138,35,135) 100%)",
    },
  },
  [`&.${stepConnectorClasses.completed}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      backgroundImage:
        "linear-gradient( 95deg,rgb(242,113,33) 0%,rgb(233,64,87) 50%,rgb(138,35,135) 100%)",
    },
  },
  [`& .${stepConnectorClasses.line}`]: {
    height: 3,
    border: 0,
    backgroundColor:
      theme.palette.mode === "dark" ? theme.palette.grey[800] : "#eaeaf0",
    borderRadius: 1,
  },
}));

const ColorlibStepIconRoot = styled("div")<{
  ownerState: { completed?: boolean; active?: boolean };
}>(({ theme, ownerState }) => ({
  backgroundColor:
    theme.palette.mode === "dark" ? theme.palette.grey[700] : "#ccc",
  zIndex: 1,
  color: "#fff",
  width: 50,
  height: 50,
  display: "flex",
  borderRadius: "50%",
  justifyContent: "center",
  alignItems: "center",
  ...(ownerState.active && {
    backgroundImage:
      "linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)",
    boxShadow: "0 4px 10px 0 rgba(0,0,0,.25)",
  }),
  ...(ownerState.completed && {
    backgroundImage:
      "linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)",
  }),
}));
function ColorlibStepIcon(props: StepIconProps) {
  const { active, completed, className } = props;

  const icons: { [index: string]: React.ReactElement } = {
    1: <BusinessCenterOutlinedIcon />,
    2: <MedicalServicesOutlinedIcon />,
    3: <CalendarMonthOutlinedIcon />,
    4: <BadgeOutlinedIcon />,
    5: <ThumbUpAltOutlinedIcon />,
  };

  return (
    <ColorlibStepIconRoot
      ownerState={{ completed, active }}
      className={className}
    >
      {icons[String(props.icon)]}
    </ColorlibStepIconRoot>
  );
}
