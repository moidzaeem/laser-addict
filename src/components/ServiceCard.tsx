import { CardContent } from "@mui/material";
import { Font, Label } from "../utils/theme/typo";
import { Div } from "../utils/styled-components";
import { primary } from "../utils/theme/colors";

interface ServiceCardProps {
  service: any;
  setSelectedService: (name: string) => void;
  selectedService: any;
}

const ServiceCard = ({
  service,
  setSelectedService,
  selectedService,
}: ServiceCardProps) => {
  const isSelected = selectedService === service.name;

  return (
    <Div
      onClick={() => setSelectedService(service.name)}
      className="shadow"
      sx={{
        minWidth: 180,
        m: 2,
        borderRadius: 4,
        cursor: "pointer",
        border: "1px solid",
        borderColor: isSelected ? primary : "white",
        transition: "border-color 0.3s ease-in-out",
        "&:hover": {
          borderColor: primary,
        },
      }}
    >
      <CardContent>
        <img style={{ height: 50 }} src={service.img} alt={service.name} />
        <Font>{service.name}</Font>
        {service.sessions && <Label sx={{ mt: 1 }}>{service.sessions}</Label>}
        <Label>{service.duration}</Label>
        <Font sx={{ mt: 1 }}>{service.price}</Font>
      </CardContent>
    </Div>
  );
};

export default ServiceCard;
