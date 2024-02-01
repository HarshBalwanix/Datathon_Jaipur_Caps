"use client";
import React, { useState, useEffect } from "react";

const AdminConfirmedAppointments = () => {
  const [confirmedAppointments, setConfirmedAppointments] = useState([]);

  useEffect(() => {
    // Fetch confirmed appointments based on the present day
    const fetchConfirmedAppointments = async () => {
      try {
        const currentDate = new Date().toISOString().split("T")[0]; // Get present day in YYYY-MM-DD format
        const response = await fetch(
          `http://localhost:3005/appointments?date=${currentDate}&status=confirmed`
        );
        const data = await response.json();

        if (response.ok) {
          setConfirmedAppointments(data);
        } else {
          console.error(
            "Failed to fetch confirmed appointments:",
            data.message
          );
        }
      } catch (error) {
        console.error("Error during fetch:", error);
      }
    };

    fetchConfirmedAppointments();
  }, []); // Empty dependency array ensures the effect runs only once on component mount

  return (
    <div>
      <h2>Confirmed Appointments</h2>
      {confirmedAppointments.length === 0 ? (
        <p>No confirmed appointments for today.</p>
      ) : (
        <ul>
          {confirmedAppointments.map((appointment) => (
            <li key={appointment.userId}>
              <p>User ID: {appointment.userId}</p>
              <p>Date: {appointment.date}</p>
              <p>Time: {appointment.time}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default AdminConfirmedAppointments;
