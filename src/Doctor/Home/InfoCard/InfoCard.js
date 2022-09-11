import React from "react";

const InfoCard = ({ img, carTitle, cardInfo, bgColor }) => {
  return (
    <div>
      <div
        className={`card card-side bg-base-100 shadow-xl ${bgColor} h-[162px]`}
      >
        <figure className="pl-5">
          <img src={img} alt="img" />
        </figure>
        <div className="card-body font-info lg:mt-4">
          <h2 className="card-title text-info">{carTitle}</h2>
          <p className="text-info">{cardInfo}</p>
        </div>
      </div>
    </div>
  );
};

export default InfoCard;
