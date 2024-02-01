// AdminGeneralSuggestion.jsx
import React, { useEffect, useState } from "react";

const AdminGeneralSuggestion = () => {
  const [generalSuggestions, setGeneralSuggestions] = useState([]);

  useEffect(() => {
    // Fetch general suggestions from the backend
    // Example fetch code (replace with actual API endpoint)
    fetch("/api/general-suggestions")
      .then((response) => response.json())
      .then((data) => setGeneralSuggestions(data));
  }, []);

  return (
    <div>
      {generalSuggestions.map((suggestion) => (
        <div key={suggestion.id}>
          <p>Suggestion: {suggestion.suggestion}</p>
        </div>
      ))}
    </div>
  );
};

export default AdminGeneralSuggestion;
