import Sidebar from "../Sidebar/Sidebar";
import Navbar from "../Navbar/Navbar";
import { Outlet } from "react-router";

const Layout = () => {
  return (
    <div className="d-flex">
      <div className="col-2">
        <Sidebar />
      </div>
      <div className="col-10">
        <Navbar />
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
