import React from "react";

const AppointmentStatus = ({ bookingId, date, time, status }) => {
  return (
    <div className="bg-white p-4 mb-4 max-w-md mx-auto rounded-md shadow-md">
      <h2 className="text-xl font-bold mb-2 text-green-500">
        Appointment Status
      </h2>
      <div className="flex justify-between items-center">
        <div>
          <p className="font-semibold">Booking ID:</p>
          <p>{bookingId}</p>
        </div>
        <div>
          <p className="font-semibold">Date:</p>
          <p>{date}</p>
        </div>
        <div>
          <p className="font-semibold">Time:</p>
          <p>{time}</p>
        </div>
        <div>
          <p className="font-semibold">Status:</p>
          <p
            className={
              status === "approved" ? "text-green-500" : "text-yellow-500"
            }
          >
            {status}
          </p>
        </div>
      </div>
    </div>
  );
};

export default AppointmentStatus;
