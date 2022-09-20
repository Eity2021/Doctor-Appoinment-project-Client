import React from "react";
import { useQuery } from "react-query";
import { CircleLoader } from "react-spinners";
import UserRow from "./UserRow/UserRow";

const AllUsers = () => {
  const {
    data: users,
    isLoading,
    refetch,
  } = useQuery("user", () =>
    fetch("http://localhost:8000/user", {
      method: "GET",
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
      <h1 className="text-2xl">All Users : {users.length}</h1>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Email</th>
              <th>Make Admin</th>
              <th>Remove Admin</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <UserRow key={user._id} user={user}>
                refetch={refetch}
              </UserRow>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllUsers;
