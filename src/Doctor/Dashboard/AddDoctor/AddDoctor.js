import React from "react";
import { useForm } from "react-hook-form";
import { useQuery } from "react-query";
import { CircleLoader } from "react-spinners";
import { toast } from "react-toastify";

const AddDoctor = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const { data: services, isLoading } = useQuery("services", () =>
    fetch("http://localhost:8000/services").then((res) => res.json())
  );

  const imageStorageKey = "9cd8f6b609ff145b766681ba2bab1631";

  const onSubmit = async (data) => {
    // console.log(data);
    const image = data.image[0];
    const formData = new FormData();
    formData.append("image", image);
    const url = `https://api.imgbb.com/1/upload?key=${imageStorageKey}`;
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((result) => {
        console.log("success", result);
        const img = result.data.url;

        const addingDoctor = {
          name: data.name,
          email: data.email,
          specialty: data.specialty,
          image: img,
        };
        //send data backend
        fetch("http://localhost:8000/doctor", {
          method: "POST",
          headers: {
            "content-type": "application/json",
            authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
          
          body:JSON.stringify(addingDoctor)
        })
        .then(res=>res.json())
        .then(inserted => {
          console.log('insert doctor info',inserted); 
          if(inserted.insertedId){
            toast.success('Doctor added Successfully');
          }
        })
      });
  };
  if (isLoading) {
    return <CircleLoader></CircleLoader>;
  }
  return (
    <div className="flex justify-center">
      <div className="text-center w-96">
        <h1 className="text-3xl font-bold">Add Doctor</h1>

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

          {/* specialty */}
          <label className="label">
            <span className="label-text ml-8">Specialty</span>
          </label>
          <select
            {...register("Specialty")}
            className="input-bordered select w-full max-w-xs"
          >
            {services.map((service) => (
              <option key={service._id} value={service.name}>
                {service.name}
              </option>
            ))}
          </select>

          {/* image file */}

          <div className="form-control w-full max-w-xs m-auto">
            <label className="label">
              <span className="label-text">Image</span>
            </label>
            <input
              type="file"
              className="input input-bordered w-full max-w-xs "
              {...register("image", {
                required: {
                  value: true,
                  message: "Image is required",
                },
              })}
            />
            <label className="label">
              {errors.image?.type === "required" && (
                <span className="label-text-alt text-red-500">
                  {errors.image.message}
                </span>
              )}
            </label>
          </div>
          {/* add doctor */}
          <input className="btn w-full max-w-xs" type="submit" value="SIGNUP" />
        </form>
      </div>
    </div>
  );
};

export default AddDoctor;
