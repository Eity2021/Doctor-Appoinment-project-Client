import React from "react";

const InfoCard = ({img,carTitle, cardInfo,bgColor}) => {
  return (
    <div>
      <div class={`card card-side bg-base-100 shadow-xl ${bgColor} h-[162px]`}>
        <figure className="pl-5">
          <img src={img} alt="img" />
        </figure>
        <div class="card-body font-info mt-4">
          <h2 class="card-title text-info">{carTitle}</h2>
          <p className="text-info">{cardInfo}</p>
          
        </div>
      </div>
    </div>
  );
};

export default InfoCard;

