/* eslint-disable @typescript-eslint/no-explicit-any */
import { CardContent } from "@mui/material";
import { Font, Label } from "../utils/theme/typo";
import { Div } from "../utils/styled-components";
import { primary } from "../utils/theme/colors";

interface hospitalCardProps {
  hospital: any;
  setSelectedHospital: (name: string) => void;
  selectedHospital: any;
}

const HospitalCard = ({
  hospital,
  setSelectedHospital,
  selectedHospital,
}: hospitalCardProps) => {
  const isSelected = selectedHospital === hospital.name;

  return (
    <Div
      onClick={() => setSelectedHospital(hospital.name)}
      sx={{
        width: 180,
        m: 2,
        borderRadius: 4,
        cursor: "pointer",
        border: "2px solid",
        borderColor: isSelected ? "#7ED1A1" : "#D9D9D9",
        transition: "border-color 0.3s ease-in-out",
        "&:hover": {
          borderColor: primary,
        },
        boxShadow: "0px 6.71px 18.31px 12.21px rgba(0, 0, 0, 0.05);",
      }}
    >
      <CardContent>
        <Div
          width={"100%"}
          display={"flex"}
          justifyContent={"flex-start"}
          alignItems={"flex-start"}
        >
          <img style={{ height: 40 }} src={hospital.img} alt={hospital.name} />
        </Div>
        <Font
          sx={{ fontWeight: "bold", mt: 1, width: "100%", textAlign: "left" }}
        >
          {hospital.name}
        </Font>
        <Label sx={{ mt: 1, textAlign: "left" }}>{hospital.region}</Label>
      </CardContent>
    </Div>
  );
};

export default HospitalCard;
