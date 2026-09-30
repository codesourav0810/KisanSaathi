import { useEffect, useState } from "react";
import { apiRequest } from "../services/api";

function ApiTest() {
  const [message, setMessage] = useState("Testing backend...");
  const [error, setError] = useState("");

  useEffect(() => {
    apiRequest("/")
      .then((data) => {
        setMessage(data.message);
      })
      .catch((err) => {
        console.error(err);
        setError("Could not connect to the backend.");
      });
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        {error ? (
          <p className="text-red-600">{error}</p>
        ) : (
          <p className="text-green-600">{message}</p>
        )}
      </div>
    </div>
  );
}

export default ApiTest;