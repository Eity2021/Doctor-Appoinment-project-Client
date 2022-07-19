import React from "react";
import Header from "../Share/Header/Header";
import Banner from "./Banner/Banner";
import Info from './Info/Info';
import Services from './Services/Services';
import Dental from './Dental/Dental';
import MakeAppointment from './MakeAppointment/MakeAppointment';
import PatientsSay from './PatientsSay/PatientsSay';
import ContactUs from './../ContactUs/ContactUs';
import Footer from '../Share/Footer/Footer';

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Info></Info>
      <Services></Services>
      <Dental></Dental>
      <MakeAppointment></MakeAppointment>
      <PatientsSay></PatientsSay>
      <ContactUs></ContactUs>
      <Footer                    ></Footer>
    </div>
  );
};

export default Home;
