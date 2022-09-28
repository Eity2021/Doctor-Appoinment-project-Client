import React from "react";
import { useQuery } from "react-query";
import { CircleLoader } from "react-spinners";
import ShowDoctorRow from "../ShowDoctorRow/ShowDoctorRow";

const ManageDoctor = () => {
  const { data: doctors, isLoading ,refetch} = useQuery("doctors", () =>
    fetch("http://localhost:8000/doctor", {
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => res.json())
  );

  if (isLoading) {
    return <CircleLoader></CircleLoader>;
  }
  return (
    <div>
      <h1>manage doctor : {doctors.length}</h1>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Avatar</th>
              <th>Name</th>
              <th>Email</th>
              <th>Specialty</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {doctors.map((doctor, index) => (
              <ShowDoctorRow
                key={doctor._id}
                doctor={doctor}
                index={index}
                refetch={refetch}
              ></ShowDoctorRow>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageDoctor;
