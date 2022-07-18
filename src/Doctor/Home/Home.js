import React from "react";
import Header from "../Share/Header/Header";
import Banner from "./Banner/Banner";
import Info from './Info/Info';
import Services from './Services/Services';
import Dental from './Dental/Dental';
import MakeAppointment from './MakeAppointment/MakeAppointment';

const Home = () => {
  return (
    <div>
      <Header></Header>
      <Banner></Banner>
      <Info></Info>
      <Services></Services>
      <Dental></Dental>
      <MakeAppointment></MakeAppointment>
    </div>
  );
};

export default Home;
