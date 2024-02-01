// AdminFIRFeedback.jsx
"use client";
import React, { useEffect, useState } from "react";

const AdminFIRFeedback = () => {
  const [feedbackData, setFeedbackData] = useState([]);

  useEffect(() => {
    // Fetch feedback data from the backend
    // Example fetch code (replace with actual API endpoint)
    fetch("/api/feedback")
      .then((response) => response.json())
      .then((data) => setFeedbackData(data));
  }, []);

  return (
    <div>
      {feedbackData.map((feedback) => (
        <div key={feedback.id}>
          <p>User ID: {feedback.userId}</p>
          <p>Rating: {feedback.rating} stars</p>
          <p>Suggestion: {feedback.suggestion}</p>
        </div>
      ))}
    </div>
  );
};

export default AdminFIRFeedback;
