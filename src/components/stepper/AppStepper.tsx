import React, { useState } from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import Button from "@mui/material/Button";
import StepLabel from "@mui/material/StepLabel";
import StepConnector, {
  stepConnectorClasses,
} from "@mui/material/StepConnector";
import { styled } from "@mui/material/styles";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { toast } from "react-toastify";
import StepSelectHospital from "./StepSelectHospital";
import StepSelectService from "./StepSelectService";
import StepSelectDate from "./StepSelectDate";
import StepUserDetails from "./StepUserDetails";
import StepCompletion from "./StepCompletion";
import BusinessCenterOutlinedIcon from "@mui/icons-material/BusinessCenterOutlined";
import MedicalServicesOutlinedIcon from "@mui/icons-material/MedicalServicesOutlined";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import BadgeOutlinedIcon from "@mui/icons-material/BadgeOutlined";
import ThumbUpAltOutlinedIcon from "@mui/icons-material/ThumbUpAltOutlined";
import { steps } from "../../utils/data";
import { Div } from "../../utils/styled-components";
import { primary } from "../../utils/theme/colors";
import { StepIconProps } from "@mui/material";

const ColorlibConnector = styled(StepConnector)(({ theme }) => ({
  [`&.${stepConnectorClasses.alternativeLabel}`]: {
    top: 22,
  },
  [`&.${stepConnectorClasses.active}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      backgroundImage: "linear-gradient( 136deg, #88D7A5 0%,  #30AA88 100%)",
    },
  },
  [`&.${stepConnectorClasses.completed}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      backgroundImage: "linear-gradient( 136deg, #88D7A5 0%,  #30AA88 100%)",
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
    backgroundImage: "linear-gradient( 136deg, #88D7A5 0%,  #30AA88 100%)",
    boxShadow: "0 4px 10px 0 rgba(0,0,0,.25)",
  }),
  ...(ownerState.completed && {
    backgroundImage: "linear-gradient( 136deg, #88D7A5 0%,  #30AA88 100%)",
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

const AppStepper: React.FC = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));
  const [activeStep, setActiveStep] = React.useState(0);
  const [completed, setCompleted] = React.useState<{ [k: number]: boolean }>(
    {}
  );
  const [selectedHospital, setSelectedHospital] = React.useState("");
  const [selectedService, setSelectedService] = useState<string>("");

  const [selectedDate, setSelectedDate] = useState([
    {
      startDate: new Date(),
      endDate: null,
      key: "selection",
    },
  ]);

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
          toast("Please select a hospital before proceeding.");
          return false;
        }
        break;
      case 1:
        if (!selectedService) {
          toast("Please select a service before proceeding.");
          return false;
        }
        break;
      case 2:
        if (!selectedDate) {
          toast("Please select a date before proceeding.");
          return false;
        }
        break;
      case 3:
        // if (!userDetails.name || !userDetails.email || !userDetails.phone) {
        //   toast("Please fill in all user details before proceeding.");
        //   return false;
        // }
        break;
      default:
        break;
    }
    return true;
  };

  const handleUserDetailsChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setUserDetails({ ...userDetails, [event.target.name]: event.target.value });
  };

  const StepContent = () => {
    switch (activeStep) {
      case 0:
        return (
          <StepSelectHospital
            selectedHospital={selectedHospital}
            setSelectedHospital={setSelectedHospital}
          />
        );
      case 1:
        return (
          <StepSelectService
            setSelectedService={setSelectedService}
            selectedService={selectedService}
          />
        );
      case 2:
        return <StepSelectDate setSelectedDate={setSelectedDate} />;
      case 3:
        return (
          <StepUserDetails
            userDetails={userDetails}
            handleUserDetailsChange={handleUserDetailsChange}
          />
        );
      case 4:
        return <StepCompletion />;
      default:
        return null;
    }
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Stepper
        nonLinear
        activeStep={activeStep}
        alternativeLabel={!isSmallScreen}
        sx={{
          flexDirection: isSmallScreen ? "column" : "row",
          alignItems: "flex-start",
          rowGap: 2,
        }}
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
            <Box sx={{ mt: 2, mb: 1 }}>
              All steps completed - you&apos;re finished
            </Box>
            <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
              <Box sx={{ flex: "1 1 auto" }} />
              <Button onClick={handleReset}>Reset</Button>
            </Box>
          </>
        ) : (
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              pt: 14,
              pb: 8,
            }}
          >
            <Button
              sx={{
                width: {
                  xs: "150px",
                },
                height: "40px",
                mr: 1,
                borderRadius: 3,
                background: primary,
                textTransform: "capitalize",
              }}
              color="success"
              variant="contained"
              onClick={handleNext}
            >
              {isLastStep() ? "Finish" : "Continue"}
            </Button>
            <Button
              sx={{
                width: {
                  xs: "150px",
                },
                height: "40px",
                mr: 1,
                borderRadius: 3,
                textTransform: "capitalize",
              }}
              color="inherit"
              disabled={activeStep === 0}
              onClick={handleBack}
            >
              Back
            </Button>
          </Box>
        )}
      </Div>
    </Box>
  );
};

export default AppStepper;
