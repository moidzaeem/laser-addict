import { CardContent } from "@mui/material";
import { Font, Label } from "../utils/theme/typo";
import { Div } from "../utils/styled-components";

const ServiceCard = ({ service }) => (
  <Div className="shadow" sx={{ minWidth: 150, m: 2, borderRadius: 4 }}>
    <CardContent>
      <img style={{ height: 50 }} src={service.img} alt="" />
      <Font>{service.name}</Font>
      <Label sx={{ mt: 1 }}>
        {service.sessions ? `${service.sessions}` : null}
      </Label>
      <Label>{service.duration}</Label>
      <Font sx={{ mt: 1 }}>{service.price}</Font>
    </CardContent>
  </Div>
);

export default ServiceCard;
