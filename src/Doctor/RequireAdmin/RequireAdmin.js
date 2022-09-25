import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Navigate, useLocation } from "react-router-dom";
import { CircleLoader } from "react-spinners";
import useAdmin from "../../hook/useAdmin";
import auth from "../firebase.init";
import { signOut } from 'firebase/auth';
const RequireAdmin = ({ children }) => {
  const [user, loading] = useAuthState(auth);
  const [admin,adminLoading] = useAdmin(user);

  let location = useLocation();

  if (loading || adminLoading) {
    return (
      <div className="flex justify-center items-center mt-center mt-52">
        {" "}
        <CircleLoader />
      </div>
    );
  }

  if (!user || !admin) {
    signOut(auth);
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
};

export default RequireAdmin;
