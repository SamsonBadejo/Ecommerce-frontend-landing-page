import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import LoginNavbar from "../../components/Navbar/LoginNavbar";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically check credentials with a backend API
    // For demonstration purposes, we assume login is always successful
    navigate("/");
  };

  return (
    <div>
      <LoginNavbar />
      <div className="flex items-center dark:bg-gray-900 bg-primary/20 justify-center min-h-screen">
        <div className="bg-white p-6 rounded shadow-md w-full max-w-md border">
          <h2 className="text-3xl font-bold mb-4 text-primary text-center ">
            Login
          </h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-gray-700">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full px-3 py-2 border rounded text-black outline-none"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 ">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full px-3 py-2 border rounded text-black outline-none"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-primary text-white py-2 rounded hover:bg-primary/80 transition duration-300"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
