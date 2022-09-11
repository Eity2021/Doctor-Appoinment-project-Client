import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { ImCross } from "react-icons/im";
import auth from "../../firebase.init";
import { useAuthState } from "react-firebase-hooks/auth";
import { signOut } from "firebase/auth";

const Header = () => {
  const [open, setOpen] = useState(false);
  const [user] = useAuthState(auth);

  const logout = () => {
    signOut(auth);
  };
  return (
    <div>
      <nav className="flex justify-between px-11 py-4 relative z-10">
        <div>
          <Link className="font-bold font-sans lg:text-2xl text-xl" to="/">
            Doctor's Appointment
          </Link>
        </div>
        <div
          className={` lg:w-[40rem]  w-full lg:static absolute  left-0 top-0 duration-500 lg:bg-[#fff] bg-primary lg:pt-0 pt-8 ${
            open ? "md:top-20px ease-in" : "top-[-380px] case-out"
          } `}
        >
          <Link
            className=" lg:inline block font-semibold text-sm px-4 py-3 rounded-md  hover:bg-success hover:text-info hover:transition ease-in-out delay-150"
            to="/"
          >
            Home
          </Link>
          <Link
            className=" lg:inline block font-semibold text-sm px-4 py-3 rounded-md  hover:bg-success hover:text-info hover:transition ease-in-out delay-150"
            to="/about"
          >
            About
          </Link>
          <Link
            className=" lg:inline block appointment font-semibold text-sm px-4 py-3 rounded-md  hover:bg-success hover:text-info hover:transition ease-in-out delay-150"
            to="/appointment"
          >
            Appointment
          </Link>
          <Link
            className=" lg:inline block reviews font-semibold text-sm px-4 py-3 rounded-md  hover:bg-success hover:text-info hover:transition ease-in-out delay-150"
            to="/reviews"
          >
            Reviews
          </Link>
          <Link
            className=" lg:inline block font-semibold text-sm px-4 py-3 rounded-md  hover:bg-success hover:text-info hover:transition ease-in-out delay-150"
            to="/contactUs"
          >
            Contact Us
          </Link>
          {
            user && <Link
            className=" lg:inline block font-semibold text-sm px-4 py-3 rounded-md  hover:bg-success hover:text-info hover:transition ease-in-out delay-150"
            to="/dashboard"
          >
            Dashboard
          </Link>
          }
          {user ? (
            <button
              className=" lg:inline block font-semibold text-sm px-4 py-3 rounded-md  hover:bg-success hover:text-info hover:transition ease-in-out delay-150"
              onClick={logout}
            >
              Signup
            </button>
          ) : (
            <Link
              className=" lg:inline block font-semibold text-sm px-4 py-3 rounded-md  hover:bg-success hover:text-info hover:transition ease-in-out delay-150"
              to="/login"
            >
              Login
            </Link>
          )}

          <div
            onClick={() => setOpen(!open)}
            className="lg:hidden absolute top-3 right-6"
          >
            {open ? <ImCross /> : <></>}
          </div>
        </div>
        <div onClick={() => setOpen(!open)} className="lg:hidden absolute top-6 left-3">
          {!open ? <FaBars /> : <></>}
        </div>

        <div>
        <label for="sideBar" class=" lg:hidden ">
          <FaBars />
          </label>
        </div>
         
      </nav>
    </div>
  );
};

export default Header;
