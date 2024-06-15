import { Outlet } from "react-router";
import Sidebar from "../../components/admin/sidebar";

const Dashboard = () => {
  return (
    <>
      <div className="flex ">
        <Sidebar />
        <div className="overflow-x-auto min-h-screen w-full bg-[#F8FAFC]">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default Dashboard;
