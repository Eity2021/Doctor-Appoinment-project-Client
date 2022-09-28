import React from "react";
import { toast } from "react-toastify";

const ShowDoctorRow = ({ doctor, index, refetch }) => {
  const { name, email, specialty, image } = doctor;

  const handleDelete = (email) => {
    fetch(`http://localhost:8000/doctor/${email}`, {
      method: "DELETE",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.deletedCount) {
          toast.success(`Doctor : ${name} is deleted`);
          refetch();
        }
      });
  };
  return (
    <tr>
      <th>{index + 1}</th>
      <td>
        <div className="avatar">
          <div className="w-16 rounded">
            <img src={image} alt="Tailwind-CSS-Avatar-component" />
          </div>
        </div>
      </td>
      <td>{name}</td>
      <td>{email}</td>
      <td>{specialty}</td>
      <td>
        <button className="btn btn-xs" onClick={() => handleDelete(email)}>
          delete
        </button>
      </td>
    </tr>
  );
};

export default ShowDoctorRow;
