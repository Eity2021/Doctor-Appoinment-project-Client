import React, { useState } from "react";
import chair from "../../images/chair.png";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import { format } from "date-fns";
const AppointmentBanner = () => {
  const [date, setDate] = useState(new Date());
  return (
    <div>
      <div class="hero min-h-screen ">
        <div class="hero-content flex-col lg:flex-row-reverse">
          <img
            src={chair}
            alt="chair"
            class="  max-w-sm rounded-lg shadow-2xl"
          />
          <div className="mr-12">
            <DayPicker mode="single" selected={date} onSelect={setDate} />
            <p>You picked {format(date, "PP")}.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppointmentBanner;
