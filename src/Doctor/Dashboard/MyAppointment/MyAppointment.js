import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';


const MyAppointment = () => {
    const[Appointments,setAppointments] = useState([]);
  const [user] = useAuthState(auth)
    useEffect(()=>{
       if(user){
        fetch(`http://localhost:8000/booking?patientEmail=${user.email}`)
        .then(res => res.json())
        .then(data => setAppointments(data));
       }
    },[])
    return (
        <div>
            <h1>my appointments : {Appointments.length}</h1>
            <div class="overflow-x-auto">
  <table class="table w-full">
    {/* <!-- head --> */}
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Date</th>
        <th>Slot</th>
        <th>Treatment</th>

      </tr>
    </thead>
    <tbody>
        {
           Appointments.map(appoint =>  <tr>
             <th></th>
            <th>{appoint.patientName}</th>
            <td>{appoint.date}</td>
            <td>{appoint.slots}</td>
            <td>{appoint.treatment}</td>
          </tr>) 
        }
      
    </tbody>
  </table>
</div>
        </div>
    );
};

export default MyAppointment;