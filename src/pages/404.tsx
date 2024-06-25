import React from "react";
import { Box, Container, Typography, Button } from "@mui/material";
import { styled, keyframes } from "@mui/system";
import { useNavigate } from "react-router-dom";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";

const pulse = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
  }
`;

const AnimatedButton = styled(Button)`
  animation: ${pulse} 1.5s infinite;
  padding: 12px 24px;
  font-size: 18px;
  background-color: #1976d2;
  color: #fff;
  &:hover {
    background-color: #115293;
  }
`;

const NotFoundPage: React.FC = () => {
  const navigate = useNavigate();
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const handleGoHome = () => {
    navigate("/");
  };

  return (
    <Container>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: "100vh",
          textAlign: "center",
          padding: "20px",
        }}
      >
        <img
          src="/gif/dino.gif"
          alt="Not Found"
          style={{
            width: isSmallScreen ? "80%" : "50%",
            marginBottom: isSmallScreen ? "20px" : "40px",
          }}
        />
        <Typography
          variant={isSmallScreen ? "h3" : "h1"}
          component="div"
          gutterBottom
          sx={{ fontWeight: "bold", color: "#1976d2" }}
        >
          404
        </Typography>
        <Typography
          variant={isSmallScreen ? "h6" : "h5"}
          component="div"
          gutterBottom
          sx={{ marginBottom: "20px", color: "#555" }}
        >
          Oops! The page you're looking for doesn't exist.
        </Typography>
        <AnimatedButton
          variant="contained"
          onClick={handleGoHome}
          sx={{
            fontSize: isSmallScreen ? "16px" : "18px",
            padding: isSmallScreen ? "10px 20px" : "12px 24px",
          }}
        >
          Go Home
        </AnimatedButton>
      </Box>
    </Container>
  );
};

export default NotFoundPage;
