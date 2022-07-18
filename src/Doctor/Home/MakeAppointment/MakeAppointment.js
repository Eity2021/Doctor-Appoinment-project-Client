import React from 'react';
import doctor from "../../images/doctor.png";
import Appointment from "../../images/appointment.png";
import PrimaryButton from '../../Share/PrimaryButton/PrimaryButton';

const MakeAppointment = () => {
    return (
        <div className='flex justify-center items-center lg:my-32 my-12' 
        style = {{
            background: `url(${Appointment})`
        }}>
            <div className='flex-1 hidden lg:block'>
                <img  className='mt-[-120px]'  src={doctor} alt="" />
            </div>
            <div className='flex-1 lg:mr-24 mx-4'>
                <h2 className='text-secondary font-bold pb-2'>Appointment</h2>
                <h1 className='text-info text-2xl font-bold pb-3'>Make an Appointment Today</h1>
                <p className='text-info text-sm'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>

             
                <PrimaryButton>get started</PrimaryButton>
            </div>
            
        </div>
    );
};

export default MakeAppointment;