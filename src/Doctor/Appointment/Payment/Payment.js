import React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import { CircleLoader } from "react-spinners";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "../CheckoutForm/CheckoutForm";

const stripePromise = loadStripe(
  "pk_test_51LuLoQJJm8rcwhBFSVifqPhcGzdJ1RBgSnex1Eu9PjKwKEZ8FmynOPNQZxKZXpVy1F43FSzG5yocbJ53CvLFcKBx00d1tbvVnM"
);
const Payment = () => {
  const { payment_id } = useParams();

  const url = `http://localhost:8000/booking/${payment_id}`;

  const { data: appointment, isLoading } = useQuery(
    ['booking', payment_id],
    () =>
      fetch(url, {
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
    <div className="grid justify-center">
      <div class="card w-96 bg-base-100 shadow-xl">
        <div class="card-body">
          <h2 class="card-title">Hello, {appointment.treatment}</h2>
          <span>
            Your Appointment{" "}
            <span className="text-primary">{appointment.date}</span> at
            {appointment.slots}
          </span>
          <span>Please Pay :${appointment.price}</span>
        </div>
      </div>

      <div class="card w-96 bg-base-100 shadow-xl mt-6">
        <div class="card-body">
          <Elements stripe={stripePromise}>
            <CheckoutForm appointment={appointment} />
          </Elements>
        </div>
      </div>
    </div>
  );
};

export default Payment;
