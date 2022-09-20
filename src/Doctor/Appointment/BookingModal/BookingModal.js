import React from "react";
import { format } from "date-fns";
import auth from "../../firebase.init";
import { useAuthState } from "react-firebase-hooks/auth";
import { toast } from "react-toastify";
const BookingModal = ({ treatment, setTreatment, date,refetch }) => {
  const { _id, name, slots } = treatment;
  const [user] = useAuthState(auth);
  const formattedDate = format(date, "PP");
  const handleBooking = (event) => {
    event.preventDefault();
    console.log(formattedDate);
    const slot = event.target.slot.value;
    console.log(name);
    console.log(slot);
    const userName = event.target.name.value;
    console.log(userName);
    const userEmail = event.target.email.value;
    console.log(userEmail);
    const phone = event.target.phone.value;
    console.log(phone);

    const booking = {
      treatmentId: _id,
      treatment: name,
      date: formattedDate,
      slots: slot,
      patientName: user.displayName,
      patientEmail: user.email,
      phone: phone,
    };

    fetch("http://localhost:8000/booking", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(booking),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.success) {
          toast(`Appointment is set, ${formattedDate} at ${slot}`);
        } else {
          toast.error(
            `Already have an Appointment on ${data.booking.date} at  ${data.booking.slots}`
          );
        }
      });
    refetch();
    setTreatment("");
  };
  return (
    <div>
      <input type="checkbox" id="Booking-Modal" className="modal-toggle" />

      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <label
            for="Booking-Modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="font-bold text-lg text-secondary text-center my-4">
            Booking For : {name}
          </h3>
          <form
            onSubmit={handleBooking}
            className="grid grid-cols-1  justify-items-center gap-3 "
          >
            <input
              disabled
              type="text"
              value={format(date, "PP")}
              className="input input-bordered w-full max-w-xs"
            />
            <select
              name="slot"
              className="select select-bordered w-full max-w-xs"
            >
              {slots.map((slot) => (
                <option value={slot}>{slot}</option>
              ))}
            </select>
            <input
              disabled
              value={user.displayName}
              type="text"
              className="input input-bordered w-full max-w-xs"
              name="name"
            />
            <input
              disabled
              type="text"
              value={user.email}
              className="input input-bordered w-full max-w-xs"
              name="email"
            />
            <input
              type="number"
              placeholder="Phone"
              className="input input-bordered w-full max-w-xs"
              name="phone"
            />
            <input
              type="submit"
              value="Submit"
              className="input input-bordered w-full max-w-xs bg-accent text-info"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;
