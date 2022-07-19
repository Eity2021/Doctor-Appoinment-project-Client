import React from "react";

const Services = ({ service }) => {
  const { name, slots } = service;
  return (
    <div>
      <div class="card bg-base-100 shadow-xl mt-12">
        <div class="card-body text-center">
          <h2 class="text-center text-xl font-semibold text-secondary">
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
          <div class="card-actions justify-center">
            <button
              disabled={slots.length === 0}
              className="btn btn-primary bg-gradient-to-r from-secondary to primary text-info uppercase font-bold my-6"
            >
              Book Appointment
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
