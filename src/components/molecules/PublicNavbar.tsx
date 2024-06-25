import React from "react";
import AppBar from "@mui/material/AppBar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import CountrySelect from "../CountrySelect";
import { Div } from "../../utils/styled-components";

const PublicNavbar: React.FC = () => {
  return (
    <AppBar position="static" sx={apstyle} elevation={0}>
      <Div
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <img
          style={{ height: 30 }}
          src="/Group 11124.svg"
          alt="LaserAddict Logo"
        />
        <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ display: { md: "none" } }}
        >
          <MenuIcon />
        </IconButton>
        <CountrySelect />
      </Div>
    </AppBar>
  );
};

export default PublicNavbar;

const apstyle = {
  background: "#787878",
  pl: { xs: 2, sm: 3, md: 8 },
  pr: { xs: 2, sm: 3, md: 8 },
  pt: { xs: 1, sm: 2 },
  pb: { xs: 1, sm: 2 },
};
