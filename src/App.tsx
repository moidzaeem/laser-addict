import React from "react";
import Navbar from "./components/Navbar";
import Wrapper, { RainbowColor } from "./utils/layout";
import { Font, Mainheading } from "./utils/theme/typo";
import AppStepper from "./components/Stepper";
import { Div } from "./utils/styled-components";
import Footer from "./components/Footer";

const App: React.FC = () => {
  return (
    <div>
      <RainbowColor
        text={"🗽Free yourself from your addictions quickly 👇  "}
        color={
          "linear-gradient(90deg, rgba(34,163,131,1) 0%, rgba(102,102,102,1) 100%)"
        }
      />
      <Wrapper>
        <Navbar />
      </Wrapper>
      <Mainheading sx={{ textAlign: "center", mt: 6, mb: 2 }}>
        Schedule your appointment <br /> with LaserAddict
      </Mainheading>
      <Font sx={{ textAlign: "center" }}>Book your appointment today !</Font>
      <Div
        sx={{
          m: {
            lg: 20,
            xs: 2,
          },
        }}
      >
        <Div className="shadow" sx={{ p: 4, borderRadius: 12 }}>
          <AppStepper />
        </Div>
      </Div>

      <Footer />
      <RainbowColor
        text={
          "Copyright © 2024 LaserAddict ® - All rights reserved to CS Lazer Sàrl."
        }
        color={"black"}
      />
    </div>
  );
};

export default App;
