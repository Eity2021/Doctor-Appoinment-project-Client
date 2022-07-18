import React from "react";
import chair from "../../images/chair.png"
const Banner = () => {
  return (
    <div>
      <div class="hero min-h-screen">
        <div class="hero-content flex-col lg:flex-row-reverse ">
          <img
            src={chair}
            class="lg:max-w-xl  rounded-lg shadow-2xl"
          />
          <div>
            <h1 class="text-5xl font-bold">Your New Smile Starts Here</h1>
            <p class="py-6">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the
            </p>
            <button class="btn btn-primary bg-gradient-to-r from-secondary text-info">GET STARTED</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;