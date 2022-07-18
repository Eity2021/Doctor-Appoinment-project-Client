import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { ImCross } from "react-icons/im";

const Header = () => {

  const [open, setOpen] = useState(false);

  return (
    <div>
      <nav className="flex justify-between px-11 py-4 relative">
        <div>
          <Link className="font-bold font-sans text-xl" to="/">
            Doctor's Appointment
          </Link>
        </div>
        <div
          className={` lg:w-[33rem]  w-full lg:static absolute  left-0 top-0 duration-500 lg:bg-[#fff] bg-primary ${
            open ? "md:top-20px ease-in" : "top-[-280px] case-out"
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
            to="/"
          >
            Appointment
          </Link>
          <Link
            className=" lg:inline block reviews font-semibold text-sm px-4 py-3 rounded-md  hover:bg-success hover:text-info hover:transition ease-in-out delay-150"
            to="/"
          >
            Reviews
          </Link>
          <Link
            className=" lg:inline block font-semibold text-sm px-4 py-3 rounded-md  hover:bg-success hover:text-info hover:transition ease-in-out delay-150"
            to="/contactUs"
          >
            Contact Us
          </Link>
          <Link
            className=" lg:inline block font-semibold text-sm px-4 py-3 rounded-md  hover:bg-success hover:text-info hover:transition ease-in-out delay-150"
            to="/login"
          >
            Login
          </Link>
          <div
            onClick={() => setOpen(!open)}
            className="lg:hidden absolute top-0 right-16"
          >
            {open ? <ImCross /> : <></>}
          </div>
        </div>
        <div onClick={() => setOpen(!open)} className="lg:hidden">
          {!open ? <FaBars /> : <></>}
        </div>
      </nav>
    </div>
  );
};

export default Header;
