import React from "react";

const ServicesCard = ({img, textTitle}) => {
  return (
    <div>
      <div class="card w-full  bg-base-100 shadow-xl">
        <figure class="px-10 pt-10">
          <img
            src={img}
            alt="img"
            class="rounded-xl"
          />
        </figure>
        <div class="card-body items-center text-center">
          <h2 class="card-title">Shoes!</h2>
          <p>{textTitle}</p>
         
        </div>
      </div>
    </div>
  );
};

export default ServicesCard;
