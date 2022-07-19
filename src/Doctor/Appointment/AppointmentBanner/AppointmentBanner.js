import React from "react";
import chair from "../../images/chair.png";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";

const AppointmentBanner = ({ date, setDate }) => {
  return (
    <div class="hero mt-20 ">
      <div class="hero-content flex-col lg:flex-row-reverse ">
        <img src={chair} alt="chair" class="lg:max-w-xl  rounded-lg shadow-2xl " />
        <div className="lg:mr-12 mr-0">
          <DayPicker mode="single" selected={date} onSelect={setDate} />
        </div>
      </div>
    </div>
  );
};

export default AppointmentBanner;
