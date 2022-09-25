import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, Outlet } from "react-router-dom";
import useAdmin from "../../hook/useAdmin";
import auth from "../firebase.init";

const Dashboard = () => {
 const [user] = useAuthState(auth);
  const [admin] = useAdmin(user); 

  return (
    <div>
      <div className="drawer drawer-mobile ">
        <input id="sideBar" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          <h1 className="text-2xl text-primary">Welcome to your Dashboard</h1>
          <Outlet></Outlet>
        </div>
        <div className="drawer-side">
          <label for="sideBar" className="drawer-overlay"></label>
          <ul className="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
            <li>
              <Link to="/dashboard">My Appointment</Link>
            </li>
            <li>
              <Link to="/dashboard/review">My Reviews</Link>
             {admin && <Link to="/dashboard/AllUsers">All Users</Link>}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
