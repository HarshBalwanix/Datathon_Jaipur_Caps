"use client";
import React, { useState, useEffect } from "react";

const AdminRequestedAppointments = () => {
  const [requestedAppointments, setRequestedAppointments] = useState([]);

  useEffect(() => {
    // Fetch requested appointments from the server
    const fetchRequestedAppointments = async () => {
      try {
        const response = await fetch(
          "http://your-api-endpoint/requested-appointments"
        );
        if (response.ok) {
          const data = await response.json();
          setRequestedAppointments(data);
        } else {
          console.error("Failed to fetch requested appointments");
        }
      } catch (error) {
        console.error("Error during appointment fetch:", error);
      }
    };

    fetchRequestedAppointments();
  }, []);

  const handleAccept = (userId) => {
    // Handle accept logic here
    console.log(`Accepted appointment for user ID ${userId}`);
  };

  const handleReject = (userId) => {
    // Handle reject logic here
    console.log(`Rejected appointment for user ID ${userId}`);
  };

  return (
    <div>
      <h2>Requested Appointments</h2>
      {requestedAppointments.map((appointment) => (
        <div key={appointment.userId} className="border p-4 my-2">
          <p>User ID: {appointment.userId}</p>
          <p>Date: {appointment.date}</p>
          <p>Time: {appointment.time}</p>
          <button onClick={() => handleAccept(appointment.userId)}>
            Accept
          </button>
          <button onClick={() => handleReject(appointment.userId)}>
            Reject
          </button>
        </div>
      ))}
    </div>
  );
};

export default AdminRequestedAppointments;
