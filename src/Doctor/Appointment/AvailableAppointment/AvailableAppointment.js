import React from 'react';
import { format } from "date-fns";
const AvailableAppointment = ({date}) => {
    return (
       <div>
         <div>
            <p className='text-center text-secondary font-600'>Available Services on {format(date, "PP")}.</p>
        </div>
        <div>
            
        </div>
       </div>
    );
};

export default AvailableAppointment;