import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepButton from '@mui/material/StepButton';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import { TextField } from '@mui/material';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';

const steps = [
    'Select the Nearest Center',
    'Select a Service',
    'Select Date and Time',
    'Information about the User’s Details',
    'Confirmation'
];
const services = [
    'Service 1',
    'Service 2',
    'Service 3',
    'Service 4',
    'Service 5'
];
const hospitals = [
    { id: 1, name: 'Hospital A' },
    { id: 2, name: 'Hospital B' },
    { id: 3, name: 'Hospital C' },
    { id: 4, name: 'Hospital D' },
    { id: 5, name: 'Hospital E' }
];

export default function AppStepper() {
    const [activeStep, setActiveStep] = React.useState(0);
    const [completed, setCompleted] = React.useState<{
        [k: number]: boolean;
    }>({});
    const [selectedHospital, setSelectedHospital] = React.useState('');
    const [selectedService, setSelectedService] = React.useState('');
    const [selectedDate, setSelectedDate] = React.useState<Date | null>(null);
    const [userDetails, setUserDetails] = React.useState({
        name: '',
        email: '',
        phone: ''
    });

    const totalSteps = () => {
        return steps.length;
    };

    const completedSteps = () => {
        return Object.keys(completed).length;
    };

    const isLastStep = () => {
        return activeStep === totalSteps() - 1;
    };

    const allStepsCompleted = () => {
        return completedSteps() === totalSteps();
    };

    const handleNext = () => {
        const newActiveStep =
            isLastStep() && !allStepsCompleted()
                ? steps.findIndex((step, i) => !(i in completed))
                : activeStep + 1;
        setActiveStep(newActiveStep);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleStep = (step: number) => () => {
        setActiveStep(step);
    };

    const handleComplete = () => {
        const newCompleted = completed;
        newCompleted[activeStep] = true;
        setCompleted(newCompleted);
        handleNext();
    };

    const handleReset = () => {
        setActiveStep(0);
        setCompleted({});
    };

    const handleHospitalChange = (event: React.ChangeEvent<{ value: unknown }>) => {
        setSelectedHospital(event.target.value as string);
    };

    const handleServiceChange = (event: React.ChangeEvent<{ value: unknown }>) => {
        setSelectedService(event.target.value as string);
    };

    const handleDateChange = (date: Date | null) => {
        setSelectedDate(date);
    };

    const handleUserDetailsChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUserDetails({ ...userDetails, [event.target.name]: event.target.value });
    };

    return (
        <Box sx={{ width: '100%' }}>
            <Stepper nonLinear activeStep={activeStep}>
                {steps.map((label, index) => (
                    <Step key={label} completed={completed[index]}>
                        <StepButton
                            color="inherit"
                            onClick={handleStep(index)}
                            sx={{
                                transition: 'background-color 0.3s ease-in-out',
                                '&:hover': {
                                    backgroundColor: '#f0f0f0' // Adjust the color as per your preference
                                }
                            }}
                        >
                            {label}
                        </StepButton>
                    </Step>
                ))}
            </Stepper>
            <div>
                {activeStep === 0 && (
                    <Box>
                        <Typography>Select the Nearest Center:</Typography>
                        <Select
                            value={selectedHospital}
                            onChange={handleHospitalChange}
                            sx={{ minWidth: 120 }}
                        >
                            {hospitals.map(hospital => (
                                <MenuItem key={hospital.id} value={hospital.name}>
                                    {hospital.name}
                                </MenuItem>
                            ))}
                        </Select>
                    </Box>
                )}
                {activeStep === 1 && (
                    <Box>
                        <Typography>Select a Service:</Typography>
                        <Select
                            value={selectedService}
                            onChange={handleServiceChange}
                            sx={{ minWidth: 120 }}
                        >
                            {services.map(service => (
                                <MenuItem key={service} value={service}>
                                    {service}
                                </MenuItem>
                            ))}
                        </Select>
                    </Box>
                )}
                {activeStep === 2 && (
                    <Box>
                        <Typography>Select Date and Time:</Typography>
                        <LocalizationProvider dateAdapter={AdapterDateFns}>
                            <DatePicker
                                label="Select Date"
                                value={selectedDate}
                                onChange={handleDateChange}
                                renderInput={(params) => <TextField {...params} />}
                            />
                        </LocalizationProvider>
                    </Box>
                )}
                {activeStep === 3 && (
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
                )}
                {activeStep === 4 && (
                    <Typography variant="h5" sx={{ mt: 2, mb: 1 }}>
                        Thank you for your submission!
                    </Typography>
                )}

                {allStepsCompleted() ? (
                    <React.Fragment>
                        <Typography sx={{ mt: 2, mb: 1 }}>
                            All steps completed - you&apos;re finished
                        </Typography>
                        <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                            <Box sx={{ flex: '1 1 auto' }} />
                            <Button onClick={handleReset}>Reset</Button>
                        </Box>
                    </React.Fragment>
                ) : (
                    <React.Fragment>
                        <Typography sx={{ mt: 2, mb: 1, py: 1 }}>
                            Step {activeStep + 1}
                        </Typography>
                        <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                            <Button
                                color="inherit"
                                disabled={activeStep === 0}
                                onClick={handleBack}
                                sx={{ mr: 1 }}
                            >
                                Back
                            </Button>
                            <Box sx={{ flex: '1 1 auto' }} />
                            <Button onClick={handleNext} sx={{ mr: 1 }}>
                                {isLastStep() ? 'Finish' : 'Next'}
                            </Button>
                            {activeStep !== steps.length &&
                                (completed[activeStep] ? (
                                    <Typography variant="caption" sx={{ display: 'inline-block' }}>
                                        Step {activeStep + 1} already completed
                                    </Typography>
                                ) : (
                                    <Button onClick={handleComplete}>
                                        {completedSteps() === totalSteps() - 1
                                            ? 'Finish'
                                            : 'Complete Step'}
                                    </Button>
                                ))}
                        </Box>
                    </React.Fragment>
                )}
            </div>
        </Box>
    );
}
