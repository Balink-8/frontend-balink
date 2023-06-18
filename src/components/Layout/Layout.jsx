import Sidebar from "../Sidebar/Sidebar";
import Navbar from "../Navbar/Navbar";
import styles from "./Layout.module.css";
import { Outlet } from "react-router";

const Layout = () => {
  return (
    <div className="d-flex">
      <div className="col-2 ">
        <Sidebar />
      </div>
      <div className="col-10">
        <Navbar />
        <div className={styles.mainContent}>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;
