import Sidebar from "../Sidebar/Sidebar";
import Navbar from "../Navbar/Navbar";
import { Outlet } from "react-router";

const Layout = () => {
  return (
    <div className="d-flex">
      <div className="col-2 ">
        <Sidebar />
      </div>
      <div className="col-10">
        <Navbar />
        <div className="m-32">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;
