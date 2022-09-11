import React from "react";
import { useNavigate } from "react-router-dom";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import auth from "../firebase.init";
import useToken from "../../hook/useToken";

const SocialMedia = () => {
  const navigate = useNavigate();
  const [signInWithGoogle, gUser, gError] = useSignInWithGoogle(auth);
  const [token] = useToken(gUser);
  let signInError;
  if (token) {
    navigate("/Appointment");
  }

  if (gError) {
    signInError = <p className="text-xs text-red-500 mb-1">{gError.message}</p>;
  }
  return (
    <div>
      {signInError}
      <div className="">
        <button onClick={() => signInWithGoogle()} className="btn btn-outline">
          Continue With Google
        </button>
      </div>
    </div>
  );
};

export default SocialMedia;
