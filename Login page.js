
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    if (window.hive_keychain) {
      window.hive_keychain.requestSignBuffer(
        username,
        "Login to Rental Marketplace",
        "Posting",
        (response) => {
          if (response.success) {
            console.log("Login successful:", response);
            localStorage.setItem("hiveUser", username);
            navigate("/dashboard");
          } else {
            console.error("Login failed:", response);
          }
        }
      );
    } else {
      alert("Hive Keychain is not installed. Please install it first.");
    }
  };

  return (
    <div>
      <h2>Login with Hive</h2>
      <input
        type="text"
        placeholder="Enter Hive Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;

