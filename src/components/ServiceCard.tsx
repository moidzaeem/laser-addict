import { CardContent } from "@mui/material";
import { Font, Label } from "../utils/theme/typo";
import { Div } from "../utils/styled-components";
import { primary } from "../utils/theme/colors";
import StarIcon from "@mui/icons-material/Star";
import Radio from "@mui/material/Radio";
import { Service } from "./types";

interface ServiceCardProps {
  service: Service;
  setSelectedService: any;
  selectedService: Service;
}

const ServiceCard = ({
  service,
  setSelectedService,
  selectedService,
}: ServiceCardProps) => {
  const isSelected = selectedService?.id === service?.id;

  return (
    <Div
      onClick={() => setSelectedService(service)}
      sx={{
        minWidth: 180,
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
          justifyContent={"space-between"}
          alignItems={"center"}
        >
          <img style={{ height: 40 }} 
           // @ts-ignore
          src={`http://laser-backend.test/${service?.logo}`} alt={service?.name} />
          <img
            style={{ height: 20 }}
            src={"/images/11.png"}
            alt={service.name}
          />
        </Div>
        <Font sx={{ fontWeight: "bold", mt: 1 }}>{service.name}</Font>
        {/* {service.sessions && <Label sx={{ mt: 1 }}>{service.sessions}</Label>} */}
        <Label>{service.duration} Minutes</Label>
        {[1, 2, 3, 4, 5].map(() => (
          <StarIcon sx={{ width: 15, color: primary, mt: 1 }} />
        ))}
        <Div
          width={"100%"}
          display={"flex"}
          justifyContent={"space-between"}
          alignItems={"center"}
        >
          <Font sx={{ fontWeight: "bold", fontSize: 20, mt: 1 }}>
            {service.price} EURO
          </Font>
          <Radio
            checked
            sx={{
              color: "#D9D9D9",
              "&.Mui-checked": {
                color: "#D9D9D9",
              },
              position: "relative",
              left: 10,
            }}
          />
        </Div>
      </CardContent>
    </Div>
  );
};

export default ServiceCard;
