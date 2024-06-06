import React from 'react';
import Navbar from './components/Navbar';
import Wrapper, { RainbowColor } from './utils/layout';
import { Font, Mainheading } from './utils/theme/typo';
import AppStepper from './components/Stepper';
import { Paper } from '@mui/material';
import { Div } from './utils/styled-components';

const App: React.FC = () => {
  return (
    <div>
      <RainbowColor text={'🗽Free yourself from your addictions quickly 👇  '} />
      <Wrapper>
        <Navbar />
      </Wrapper>

      <Mainheading sx={{ textAlign: 'center', mt: 6, mb: 2 }}>Schedule your appointment <br /> with LaserAddict</Mainheading>
      <Font sx={{ textAlign: 'center' }}>Book your appointment today !</Font>
      <Div sx={{ m: 20 }}>
        <Paper elevation={1} sx={{ p: 4, borderRadius: 12 }}>
          <AppStepper />
        </Paper>
      </Div>
    </div>
  );
};

export default App;
