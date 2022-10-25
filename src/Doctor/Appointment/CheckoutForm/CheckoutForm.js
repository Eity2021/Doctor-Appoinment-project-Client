import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useEffect, useState } from "react";

const CheckoutForm = ({ appointment }) => {
  const stripe = useStripe();
  const elements = useElements();
  // const [paymentMethod, setPaymentMethod] = useState('');
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [processing, setProcessing] = useState(false);
  const [transactionId, setTransactionId] = useState("");

  const [clientSecret, setClientSecret] = useState("");

  const { _id, price, patientName, patientEmail } = appointment;
  useEffect(() => {
    fetch("http://localhost:8000/create-payment-intent", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        'authorization': `Bearer ${localStorage.getItem("accessToken")}`,
      },
      body: JSON.stringify({ price }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data?.clientSecret) {
          setClientSecret(data.clientSecret);
        }
      });
  }, [price]);
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
    setSuccessMessage("");
    setProcessing(true);
    //set card payment

    const { paymentIntent, error: intentError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            name: patientName,
            email: patientEmail,
          },
        },
      });
    if (intentError) {
      setErrorMessage(intentError?.message);
      setProcessing(false);
    } else {
      setErrorMessage("");
      setTransactionId(paymentIntent.id);
      setSuccessMessage("congrats ,Your Payment is complete");
      const payment = {
        appointment: _id,
        transactionId: paymentIntent.id,
      };
      //backend book
      fetch(`http://localhost:8000/booking/${_id}`, {
        method: "PATCH",
        headers: {
          "content-type": "application/json",
          'authorization': `Bearer ${localStorage.getItem("accessToken")}`,
        },
        body: JSON.stringify(payment)
      })
        .then((res) => res.json())
        .then((data) => {
          //console.log(data);
          setProcessing(false);
        });
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <CardElement />
        <button
          className="bg-primary px-2 py-1 rounded"
          type="submit"
          disabled={!stripe || !elements || !clientSecret || successMessage}
        >
          Pay
        </button>
      </form>
      {errorMessage && <p className="text-red-500">{errorMessage}</p>}
      {successMessage && <p className="text-green-500">{successMessage}</p>}
    </div>
  );
};

export default CheckoutForm;
