import NotFoundPage from "../src/pages/404";
import HomePage from "../src/pages/home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const PublicRoutes = () => {
  return (
    <Router>
      <Routes>
        {["/", "/home"].map((path) => (
          <Route key={path} path={path} element={<HomePage />} />
        ))}
        <Route path={"*"} element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
};

export default PublicRoutes;
