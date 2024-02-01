"use client";
import React, { useState, useEffect } from "react";

const AdminRegisteredFIR = () => {
  const [registeredFIRs, setRegisteredFIRs] = useState([]);

  useEffect(() => {
    // Fetch old registered FIRs from the server
    const fetchRegisteredFIRs = async () => {
      try {
        const response = await fetch("http://localhost:3005/fir/registered");
        if (response.ok) {
          const data = await response.json();
          setRegisteredFIRs(data);
        } else {
          console.error("Failed to fetch registered FIRs");
        }
      } catch (error) {
        console.error("Error during FIR fetch:", error);
      }
    };

    fetchRegisteredFIRs();
  }, []);

  const handleResolveClick = async (firId) => {
    // Perform your API call to mark FIR as resolved
    try {
      const response = await fetch(
        `http://localhost:3005/fir/resolve/${firId}`,
        {
          method: "PUT",
        }
      );

      if (response.ok) {
        // FIR resolved successfully
        console.log("FIR resolved successfully!");
        // You can update the UI or take further actions if needed
      } else {
        // Handle FIR resolution error
        const data = await response.json();
        console.error("FIR resolution failed:", data.message);
      }
    } catch (error) {
      console.error("Error during FIR resolution:", error);
    }
  };

  return (
    <div>
      <h2>Registered FIRs</h2>
      <table>
        <thead>
          <tr>
            <th>FIR ID</th>
            <th>User ID</th>
            <th>Date</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {registeredFIRs.map((fir) => (
            <tr key={fir.id}>
              <td>{fir.id}</td>
              <td>{fir.userId}</td>
              <td>{fir.date}</td>
              <td>
                {fir.status === "resolved" ? (
                  "Resolved"
                ) : (
                  <button onClick={() => handleResolveClick(fir.id)}>
                    Resolve
                  </button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminRegisteredFIR;
