import { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CenterLoader from "../src/components/atoms/CenterLoader";

// Lazy load components
const NotFoundPage = lazy(() => import("../src/pages/404"));
const HomePage = lazy(() => import("../src/pages/home"));
const LoginPage = lazy(() => import("../src/pages/login"));
const ForgetPasswordPage = lazy(() => import("../src/pages/forget-password"));
const ChangePasswordPage = lazy(() => import("../src/pages/change-password"));
const ResetMailSuccessPage = lazy(
  () => import("../src/pages/reset-mail-success")
);

const PublicRoutes = () => {
  return (
    <Router>
      <Suspense fallback={<CenterLoader />}>
        <Routes>
          {["/", "/home"].map((path) => (
            <Route key={path} path={path} element={<HomePage />} />
          ))}
          <Route path="/login" element={<LoginPage />} />
          <Route path="/forget-password" element={<ForgetPasswordPage />} />
          <Route path="/change-password" element={<ChangePasswordPage />} />
          <Route
            path="/reset-mail-success"
            element={<ResetMailSuccessPage />}
          />

          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </Router>
  );
};

export default PublicRoutes;
