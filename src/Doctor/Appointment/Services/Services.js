import React from "react";

const Services = ({ service, setTreatment }) => {
  const { name, slots } = service;
  return (
    <div>
      <div className="card bg-base-100 shadow-xl mt-12">
        <div className="card-body text-center">
          <h2 className="text-center text-xl font-semibold text-secondary">
            {name}
          </h2>
          <p>
            {slots.length > 0 ? (
              <span className="text-sm ">{slots[1]}</span>
            ) : (
              <span className="text-[#ff0000] text-sm font-medium">
                Try Another Day
              </span>
            )}
          </p>
          <p className="text-sm ">
            {slots.length} {slots.length > 1 ? "spaces " : "space "} available
          </p>
          <div className="card-actions justify-center">
            <label
              onClick={() => setTreatment(service)}
              disabled={slots.length === 0}
              for="Booking-Modal"
              className="btn btn-primary bg-gradient-to-r from-secondary to primary text-info uppercase font-bold my-6"
            >
              {" "}
              Book Appointment
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
