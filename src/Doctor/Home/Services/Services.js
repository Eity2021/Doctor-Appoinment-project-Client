import React from 'react';
import ServicesCard from './../ServicesCard/ServicesCard';
import fluoride from "../../images/fluoride.png";
import cavity from "../../images/cavity.png";
import whitening from "../../images/whitening.png";
const Services = () => {
    return (
      <div>
        <div>
            <h2 className='text-xl  font-bold text-secondary text-center mb-2 uppercase'>our services</h2>
            <h1 className='text-3xl  text-accent text-center mb-4'>Services We Provide</h1>
        </div>
          <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 px-12 mb-8'>
            <ServicesCard img={fluoride} textTitle="Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the"></ServicesCard>
            <ServicesCard img={cavity} textTitle="Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the"></ServicesCard>
            <ServicesCard img={whitening} textTitle="Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the"></ServicesCard>
        </div>
      </div>
    );
};

export default Services;