import { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CenterLoader from "../src/components/atoms/CenterLoader";
import LoginPage from "../src/pages/login";

// Lazy load components
const NotFoundPage = lazy(() => import("../src/pages/404"));
const HomePage = lazy(() => import("../src/pages/home"));

const PublicRoutes = () => {
  return (
    <Router>
      <Suspense fallback={<CenterLoader />}>
        <Routes>
          {["/", "/home"].map((path) => (
            <Route key={path} path={path} element={<HomePage />} />
          ))}
          <Route path="/login" element={<LoginPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </Router>
  );
};

export default PublicRoutes;
