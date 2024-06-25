import { RainbowColor } from ".";
import PublicNavbar from "../../components/molecules/PublicNavbar";
import { Div } from "../styled-components";

interface PBType {
  children: React.ReactNode;
}

const PublicWrapper: React.FC<PBType> = ({ children }) => {
  return (
    <div>
      <RainbowColor
        text={"LaserAddict CRM - V1.0.0a 👇"}
        color={
          "linear-gradient(90deg, rgba(34,163,131,1) 0%, rgba(102,102,102,1) 100%)"
        }
      />
      <PublicNavbar />
      {/* create a responsive grid container */}
      {children}
      <Div
        sx={{
          backgroundImage: "url('/svg/Group 11130.svg')",
          height: {
            lg: 200,
            xs: 50,
          },
          width: "100%",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      <RainbowColor
        text={"Copyright © 2024 SARL CS LAZER ® - All rights reserved"}
        color={"black"}
      />
    </div>
  );
};

export default PublicWrapper;
