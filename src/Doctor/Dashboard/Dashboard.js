import React from "react";
import { Link, Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div>
      <div class="drawer drawer-mobile ">
        <input id="sideBar" type="checkbox" class="drawer-toggle" />
        <div class="drawer-content">
          <h1 className="text-2xl text-primary">Welcome to your dashboard</h1>
          <Outlet></Outlet>
        
          
        </div>
        <div class="drawer-side">
          <label for="sideBar" class="drawer-overlay"></label>
          <ul class="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
            <li>
              <Link to="/dashboard">My Appointment</Link>
            </li>
            <li>
              <Link to="/dashboard/review">My Reviews</Link>
            </li>
          </ul>
        </div>
      </div>


    </div>
  );
};

export default Dashboard;
