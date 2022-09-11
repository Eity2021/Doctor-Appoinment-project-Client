import React from "react";
import loginPic from "../images/LoginPic.jpg";
import SocialMedia from "../SocialMedia/SocialMedia";
import { useForm } from "react-hook-form";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import auth from "../firebase.init";
import { CircleLoader } from "react-spinners";
import { Link } from "react-router-dom";
import { useNavigate, useLocation } from "react-router-dom";
const Login = () => {
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const navigate = useNavigate();
  let location = useLocation();
  let from = location.state?.from?.pathname || "/";

  let signInError;
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    signInWithEmailAndPassword(data.email, data.password);
    console.log(data);
  };

  if (user) {
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
    <div className="border-2 bg-info rounded-lg shadow-2xl  my-12 px-4">
      <div className="hero ">
        <div className="hero-content flex-col lg:flex-row ">
          <div className="">
            <img
              src={loginPic}
              alt="LoginPic"
              className="rounded max-h-[30rem]"
            />
          </div>
          <div className="text-center w-96">
            <h1 className="text-5xl font-bold">Login</h1>

            <form onSubmit={handleSubmit(onSubmit)} className="m-auto">
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
                  placeholder="Your Password"
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
              {signInError}
              <input
                className="btn w-full max-w-xs"
                type="submit"
                value="LOGIN"
              />
            </form>
            <p className="text-sm m-1">
              Create have an account?{" "}
              <Link to="/signUp" className="text-secondary">
                create new account
              </Link>{" "}
            </p>
            <div className="divider">OR</div>
            <SocialMedia></SocialMedia>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
