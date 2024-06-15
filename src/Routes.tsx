import { Route, Routes } from "react-router-dom";
import Login from "./views/Login";
import Register from "./views/Register";
import Home from "./views/User/Home";
import LandingPage from "./views/landingPage";
import SuccessfulPage from "./components/Users/SuccessfulPage";
import Dashboard from "./views/admin";
import Candidates from "./views/admin/Dashboard/Candidates";
import Categories from "./views/admin/Dashboard/Categories";
import Voters from "./views/admin/Dashboard/Voters";
import Results from "./views/admin/Dashboard/Results";
import NoMatch from "./views/NoMatch";

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
        <Route path="/voting-finish" element={<SuccessfulPage />} />
        <Route element={<Dashboard />}>
          <Route path="/dashboard/*" element={<Candidates />} />
          <Route path="/dashboard/categories/*" element={<Categories />} />
          <Route path="/dashboard/voters/*" element={<Voters />} />
          <Route path="/dashboard/results/*" element={<Results />} />
        </Route>
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </>
  );
};

export default AppRoutes;
