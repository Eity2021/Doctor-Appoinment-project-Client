import React from "react";

const PatientsSayCard = ({ testimonial }) => {
  return (
    <div>
      <div className="card w-100 bg-base-100 shadow-xl">
        <div className="card-body">
          <p>
            It is a long established fact that by the readable content of a lot
            layout. The point of using Lorem a more-or-less normal distribu to
            using Content here, content
          </p>
          <div className="flex mt-4">
            <div className="avatar">
              <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                <img src={testimonial.img} />
              </div>
            </div>
            <div className="mt-6 lg:ml-10 ml-4">
              <h2 className="font-bold">{testimonial.name}</h2>
              <p className="font-sm">{testimonial.location}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PatientsSayCard;
