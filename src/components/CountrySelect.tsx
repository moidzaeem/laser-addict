import { Select, MenuItem } from "@mui/material";
import { CountrySvg } from "../utils/data";

const CountrySelect = () => {
  return (
    <Select
      style={{ height: 50, width: 80 }}
      sx={{ display: { xs: "none", md: "flex" }, alignItems: "center" }}
      defaultValue={CountrySvg[0].name} // Set default value to the first country name
    >
      {CountrySvg.map((country, index) => (
        <MenuItem key={index} value={country.name}>
          {country.svg}
          {/* <span style={{ marginLeft: 8 }}>{country.name}</span> */}
        </MenuItem>
      ))}
    </Select>
  );
};

export default CountrySelect;
