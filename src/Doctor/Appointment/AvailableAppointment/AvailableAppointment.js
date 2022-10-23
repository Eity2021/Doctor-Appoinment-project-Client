import React from "react";
import { format } from "date-fns";
import { useState } from "react";
import Services from "../Services/Services";
import BookingModal from "../BookingModal/BookingModal";
import { useQuery } from "react-query";

const AvailableAppointment = ({ date }) => {
  // const [services, setServices] = useState([]);
  const [treatment, setTreatment] = useState(null);

  const formattedDate = format(date, "PP");
  const { data: services, refetch } = useQuery(
    ["available", formattedDate],
    () =>
      fetch(`http://localhost:8000/available?date=${formattedDate}`).then(
        (res) => res.json()
      )
  );

  return (
    <div className="mt-20">
      <div>
        <p className="text-center text-secondary font-600">
          Available Services on {format(date, "PP")}.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mx-12">
        {services?.map((service) => (
          <Services
            key={service._id}
            service={service}
            setTreatment={setTreatment}
          ></Services>
        ))}
      </div>
      {treatment && (
        <BookingModal
          treatment={treatment}
          setTreatment={setTreatment}
          date={date}
          refetch={refetch}
        ></BookingModal>
      )}
    </div>
  );
};

export default AvailableAppointment;
