import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";

const Signup = () => {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [dob, setDob] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    // Store account locally
    const userData = {
      name,
      email,
      dob,
      password,
    };

    localStorage.setItem("userData", JSON.stringify(userData));

    alert("Signup Successful!");
    navigate("/login");
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 px-4">
      <div className="w-full max-w-md bg-white rounded-xl shadow-md p-8">

        {/* Logo */}
        <img src={logo} alt="logo" className="w-full h-15 object-contain mx-auto mb-4" />

        <h2 className="text-center text-2xl font-semibold mb-6">
          Create Your Account
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">

          {/* Full Name */}
          <div>
            <label className="block font-medium mb-1">Full Name</label>
            <input
              type="text"
              placeholder="Enter your full name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="w-full border rounded-lg px-3 py-2 focus:ring focus:ring-blue-200"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block font-medium mb-1">Email ID</label>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full border rounded-lg px-3 py-2 focus:ring focus:ring-blue-200"
            />
          </div>

          {/* DOB */}
          <div>
            <label className="block font-medium mb-1">Date of Birth</label>
            <input
              type="date"
              value={dob}
              onChange={(e) => setDob(e.target.value)}
              required
              className="w-full border rounded-lg px-3 py-2 focus:ring focus:ring-blue-200"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block font-medium mb-1">Password</label>
            <input
              type="password"
              placeholder="Create password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full border rounded-lg px-3 py-2 focus:ring focus:ring-blue-200"
            />
          </div>

          {/* Confirm Password */}
          <div>
            <label className="block font-medium mb-1">Confirm Password</label>
            <input
              type="password"
              placeholder="Re-enter password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
              className="w-full border rounded-lg px-3 py-2 focus:ring focus:ring-blue-200"
            />
          </div>

          {/* Sign Up Button */}
          <button
            type="submit"
            className="w-full bg-blue-700 text-white py-2 rounded-lg font-medium hover:bg-blue-800 transition"
          >
            Sign Up
          </button>
        </form>

        {/* Login Redirect */}
        <p className="text-center mt-4 text-gray-600">
          Already have an account?{" "}
          <span
            className="text-blue-700 cursor-pointer"
            onClick={() => navigate("/login")}
          >
            Login
          </span>
        </p>
      </div>
    </div>
  );
};

export default Signup;
