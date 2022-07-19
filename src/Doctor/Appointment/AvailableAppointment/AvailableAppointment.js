import React, { useEffect } from 'react';
import { format } from "date-fns";
import { useState } from 'react';
const AvailableAppointment = ({date}) => {
    const [services,setServices] = useState([]);

    useEffect(() => {
        fetch('services.json')
        .then(res => res.json())
        .then(data => setServices(data))
    },[])
    return (
       <div className='mt-20'>
         <div>
            <p className='text-center text-secondary font-600'>Available Services on {format(date, "PP")}.</p>
        </div>
        <div>
            
        </div>
       </div>
    );
};

export default AvailableAppointment;