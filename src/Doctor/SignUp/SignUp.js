import React from "react";
import loginPic from "../images/LoginPic.jpg";
import { useForm } from "react-hook-form";
import { CircleLoader } from "react-spinners";
import {
  useCreateUserWithEmailAndPassword,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import auth from "../firebase.init";
import { Link } from "react-router-dom";
import SocialMedia from "../SocialMedia/SocialMedia";
import { useNavigate, useLocation } from "react-router-dom";
import useToken from "../../hook/useToken";
const SignUp = () => {
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);

  const [updateProfile, updating, updateError] = useUpdateProfile(auth);

 const [token] = useToken(user);



  const navigate = useNavigate();
  const location = useLocation();
  let from = location.state?.from?.pathname || "/Appointment";
  let signInError;
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    console.log(data);
    await createUserWithEmailAndPassword(data.email, data.password);
    await updateProfile({ displayName: data.name });
    navigate("/Appointment");
  };

  if (token) {
    navigate(from, { replace: true });
  }
  if (loading) {
    return (
      <div className="flex justify-center items-center mt-center mt-52">
        {" "}
        <CircleLoader />
      </div>
    );
  }

  if (error) {
    signInError = <p className="text-xs text-red-500 mb-1">{error.message}</p>;
  }
  // console.log(watch("example")); // watch input value by passing the name of it

  return (
    <div>
      <div className="border-2 bg-info rounded-lg shadow-2xl  my-12 px-4">
        <div className="hero ">
          <div className="hero-content flex-col lg:flex-row ">
            <div className="">
              <img
                src={loginPic}
                alt="LoginPic"
                className="rounded max-h-[45rem]   max-w-[45rem]"
              />
            </div>
            <div className="text-center w-96">
              <h1 className="text-5xl font-bold">Sign Up</h1>

              <form onSubmit={handleSubmit(onSubmit)} className="m-auto">
                {/* name */}
                <div className="form-control w-full max-w-xs m-auto">
                  <label className="label">
                    <span className="label-text">Name</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="input input-bordered w-full max-w-xs "
                    {...register("name", {
                      required: {
                        value: true,
                        message: "Name is required",
                      },
                    })}
                  />
                  <label className="label">
                    {errors.name?.type === "required" && (
                      <span className="label-text-alt text-red-500">
                        {errors.name.message}
                      </span>
                    )}
                  </label>
                </div>
                {/* email */}
                <div className="form-control w-full max-w-xs m-auto">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="input input-bordered w-full max-w-xs "
                    {...register("email", {
                      required: {
                        value: true,
                        message: "Email is required",
                      },
                      pattern: {
                        value:
                          /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                        message: "provide e valid Email",
                      },
                    })}
                  />
                  <label className="label">
                    {errors.email?.type === "required" && (
                      <span className="label-text-alt text-red-500">
                        {errors.email.message}
                      </span>
                    )}

                    {errors.email?.type === "pattern" && (
                      <span className="label-text-alt text-red-500">
                        {errors.email.message}
                      </span>
                    )}
                  </label>
                </div>

                {/* password */}
                <div className="form-control w-full max-w-xs m-auto">
                  <label className="label">
                    <span className="label-text ">Password</span>
                  </label>
                  <input
                    type="password"
                    placeholder="Password"
                    className="input input-bordered w-full max-w-xs"
                    {...register("password", {
                      required: {
                        value: true,
                        message: "password is required",
                      },
                      // pattern: {
                      //   value: /^[A-Za-z]\w{7,14}$/,
                      //   message: "provide e valid password",
                      // },
                      minLength: {
                        value: 8,
                        message: "Must be 8 characters or longer",
                      },
                    })}
                  />
                  <label className="label">
                    {errors.password?.type === "required" && (
                      <span className="label-text-alt text-red-500">
                        {errors.password.message}
                      </span>
                    )}

                    {/* {errors.password?.type === "pattern" && (
                    <span className="label-text-alt text-red-500">
                      {errors.email.message}
                    </span>
                  )} */}

                    {errors.password?.type === "minLength" && (
                      <span className="label-text-alt text-red-500">
                        {errors.password.message}
                      </span>
                    )}
                  </label>
                </div>

                {/* confirm password */}
                {/* <div className="form-control w-full max-w-xs m-auto">
                  <label className="label">
                    <span className="label-text ">Password</span>
                  </label>
                  <input
                    type="password"
                    placeholder="Confirm Password"
                    className="input input-bordered w-full max-w-xs"
                    {...register("ConfirmPassword", {
                      required: {
                        value: true,
                        message: "Confirm password is required",
                      },
                      // pattern: {
                      //   value: /^[A-Za-z]\w{7,14}$/,
                      //   message: "provide e valid password",
                      // },
                      minLength: {
                        value: 8,
                        message: "Must be 8 characters or longer",
                      },
                    })}
                  />
                  <label className="label">
                    {errors.ConfirmPassword?.type === "required" && (
                      <span className="label-text-alt text-red-500">
                        {errors.ConfirmPassword.message}
                      </span>
                    )}

                    {/* {errors.password?.type === "pattern" && (
                    <span className="label-text-alt text-red-500">
                      {errors.ConfirmPassword.message}
                    </span>
                  )} */}

                {/* {errors.password?.type === "minLength" && (
                      <span className="label-text-alt text-red-500">
                        {errors.ConfirmPassword.message}
                      </span>
                    )}
                  </label>
                </div>  */}
                {signInError}
                <input
                  className="btn w-full max-w-xs"
                  type="submit"
                  value="SIGNUP"
                />
              </form>
              <small className="text-sm">
                Already have an account{" "}
                <Link to="/logIn" className="text-secondary">
                  Login
                </Link>{" "}
              </small>
              <div className="divider">OR</div>
              <SocialMedia></SocialMedia>
            </div>
          </div>
        </div>
      </div>
      );
    </div>
  );
};

export default SignUp;
