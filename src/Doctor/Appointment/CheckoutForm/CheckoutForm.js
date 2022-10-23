import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import is from "date-fns/esm/locale/is/index.js";
import React, { useEffect, useState } from "react";

const CheckoutForm = ({ appointment }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [paymentMethod, setPaymentMethod] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);

  const [clientSecret, setClientSecret] = useState("");

  const { price } = appointment;
  useEffect(() => {
    fetch("http://localhost:3000/dashboard/payment/create-payment-intent", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
      body:JSON.stringify({price})
    })
      .then((res) => res.json())
      .then((data) => {
        if(data?.clientSecret){
          setClientSecret(data.clientSecret);
        }
      });
  }, []);
  const handleSubmit = async (event) => {
    event.preventDefault();
    const card = elements.getElement(CardElement);
    if (elements == null) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    setErrorMessage(error?.message || "");
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <CardElement />
        <button type="submit" disabled={!stripe || !elements}>
          Pay
        </button>
      </form>
      {errorMessage && <p className="text-red-500">{errorMessage}</p>}
    </>
  );
};

export default CheckoutForm;
