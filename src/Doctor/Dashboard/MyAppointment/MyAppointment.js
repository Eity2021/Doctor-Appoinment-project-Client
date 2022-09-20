import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';


const MyAppointment = () => {
  const [Appointments, setAppointments] = useState([]);
  const [user] = useAuthState(auth);
  const navigate = useNavigate();
  useEffect(() => {
    if (user) {
      fetch(`http://localhost:8000/booking?patientEmail=${user.email}` ,{
        method : 'GET',
        headers:{
          'authorization' :`Bearer ${localStorage.getItem('accessToken')}`
        }
      })
        .then((res) => {
          console.log('res', res);
          if(res.status === 401 || res.status === 403){
            signOut(auth);
            localStorage.removeItem('accessToken');
            navigate('/')
          }
          return res.json()
        })
        .then((data) => {
          setAppointments(data)
        });
    }
  }, [user]);
  return (
    <div>
      <h1 className="my-2">My Appointments : {Appointments.length}</h1>
      <div className="overflow-x-auto">
        <table className="table w-full">
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
            {Appointments.map((appoint) => (
              <tr>
                <th></th>
                <th>{appoint.patientName}</th>
                <td>{appoint.date}</td>
                <td>{appoint.slots}</td>
                <td>{appoint.treatment}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyAppointment;
