import React from "react";

const ServicesCard = ({ img, textTitle }) => {
  return (
    <div>
      <div className="card w-full  bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
          <img src={img} alt="img" className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">Shoes!</h2>
          <p>{textTitle}</p>
        </div>
      </div>
    </div>
  );
};

export default ServicesCard;
