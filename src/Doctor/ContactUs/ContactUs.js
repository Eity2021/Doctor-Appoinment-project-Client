import React from "react";
import Appointment from "../images/appointment.png";
import PrimaryButton from "../Share/PrimaryButton/PrimaryButton";
const ContactUs = () => {
  return (
    <section
      className="bg-no-repeat"
      style={{
        background: `url(${Appointment})`,
      }}
    >
      <div className="text-center">
        <div className="pt-12">
          <h2 className="text-xl  font-bold text-secondary text-center mb-2  uppercase">
            Contact Us
          </h2>
          <h1 className="text-3xl  text-info text-center mb-4">
            Stay connected with us
          </h1>
        </div>
        <div>
          <div>
            <input
              type="text"
              placeholder="Email Address"
              className="input w-full max-w-xs mb-3"
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="Subject"
              className="input w-full max-w-xs mb-3"
            />
          </div>
          <div>
            <textarea
              className="textarea  w-full max-w-xs"
              placeholder="your message "
            ></textarea>
          </div>
          <div>
            <PrimaryButton>Submit</PrimaryButton>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
