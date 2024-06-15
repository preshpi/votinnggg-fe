import { Navigate, Outlet, Route, Routes, useLocation } from "react-router-dom";
import Login from "./views/Login";
import { useAuth } from "./hook/auth";
import Register from "./views/Register";
import Home from "./views/User/Home";
import LandingPage from "./views/landingPage";
import SuccessfulPage from "./components/Users/candidates/Submission";

// const RequireAuth = () => {
//   const location = useLocation();
//   const { user } = useAuth();

//   if (!user) {
//     return <Navigate to="/login" state={{ from: location }} replace />;
//   }
//   return <Outlet />;
// };

// function LoggedIn() {
//   const location = useLocation();
//   const { user } = useAuth();
//   if (user) {
//     return <Navigate to="/" state={{ from: location }} replace />;
//   }

//   return <Outlet />;
// }

const AppRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        <Route path="/voting" element={<Home />} />
        {/* <Route path="/submission" element={<SuccessfulPage />} /> */}
      </Routes>
    </>
  );
};

export default AppRoutes;
