import React from "react";
import chair from "../../images/chair.png";
import PrimaryButton from "./../../Share/PrimaryButton/PrimaryButton";
import bg from "../../images/bg.png";
const Banner = () => {
  return (
    <div
      style={{
        background: `url(${bg})`,
      }}
    >
      <div className="hero mt-20">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src={chair}
            alt="chair"
            className="lg:max-w-xl  max-w-xs rounded-lg shadow-2xl "
          />
          <div>
            <h1 className="text-5xl font-bold">Your New Smile Starts Here</h1>
            <p className="py-6">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the
            </p>
            <PrimaryButton>get started</PrimaryButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
