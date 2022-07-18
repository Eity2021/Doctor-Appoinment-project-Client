import React from "react";
import InfoCard from "../InfoCard/InfoCard";
import clock from "../../icons/clock.svg";
import marker from "../../icons/marker.svg";
import phone from "../../icons/phone.svg";
const Info = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 px-12 mb-24">
      <InfoCard
        carTitle="Opening Hours"
        cardInfo="Lorem Ipsum is simply dummy text of the pri"
        img={clock}
        bgColor="bg-gradient-to-r from-secondary to-primary"    
      ></InfoCard>
      <InfoCard
        carTitle="Visit our location"
        cardInfo="Brooklyn, NY 10036, United States"
        img={marker}
        bgColor="bg-accent"
      ></InfoCard>
      <InfoCard
        carTitle="Contact Us now"
        cardInfo="+000 123 456789"
        img={phone}
        bgColor="bg-gradient-to-r from-secondary to-primary"
      ></InfoCard>
    </div>
  );
};

export default Info;
