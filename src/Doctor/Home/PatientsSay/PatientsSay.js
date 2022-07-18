import React from "react";
import quote from "../../icons/quote.svg";

import people1 from '../../images/people1.png';
import people2 from '../../images/people2.png';
import people3 from '../../images/people3.png';
import PatientsSayCard from "../PatientsSayCard/PatientsSayCard";





const PatientsSay = () => {

  const testimonials = [
    {
      id: 1,
      name: "Winson herry",
      location: "California",
      reviews:
        "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
      img: people1,
    },
    {
      id: 2,
      name: "Winson herry",
      location: "California",
      reviews:
        "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
      img: people2,
    },
    {
      id: 3,
      name: "Winson herry",
      location: "California",
      reviews:
        "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
      img: people3,
    },
  ];

  return (
    <section className="lg:mx-12 mx-3 md:mx-6 mb-12">
      <div className="flex justify-between ">
        <div className="">
          <h2 className="text-xl  font-bold text-secondary  mb-2 uppercase">
            Testimonial
          </h2>
          <h1 className="text-3xl  text-accent  mb-4 ">
            What Our Patients Says
          </h1>
        </div>
        <div>
          <img className="w-24 lg:w-48" src={quote} alt="" />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {
            testimonials.map(testimonial => <PatientsSayCard key={testimonial} testimonial={testimonial}></PatientsSayCard>)
        }
      </div>
    </section>
  );
};

export default PatientsSay;
