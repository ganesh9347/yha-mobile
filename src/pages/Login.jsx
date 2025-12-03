import React, { useState } from "react";
import { useNavigate, Link} from "react-router-dom";
import logo from "../assets/logo.png";

const Login = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("personal");

  // Personal Details
  const [membershipId, setMembershipId] = useState("");
  const [email, setEmail] = useState("");
  const [dob, setDob] = useState("");

  // Password Login
  const [passwordEmail, setPasswordEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("isLoggedIn", "true");
    navigate("/");
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 px-4">
      <div className="w-full max-w-md bg-white rounded-xl shadow-md p-8">

        {/* Logo */}
        <img src={logo} alt="logo" className="w-full h-15 object-contain mx-auto mb-4" />

        <h2 className="text-center text-2xl font-semibold mb-6">
          Sign In to Your Account
        </h2>

        {/* Tabs */}
        <div className="flex justify-center mb-6">
          <button
            className={`px-6 py-2 border rounded-l-lg ${
              activeTab === "personal"
                ? "bg-gray-200"
                : "bg-white border-gray-200"
            }`}
            onClick={() => setActiveTab("personal")}
          >
            Personal Details
          </button>

          <button
            className={`px-6 py-2 border rounded-r-lg ${
              activeTab === "password"
                ? "bg-gray-200" 
                : "bg-white border-gray-200"
            }`}
            onClick={() => setActiveTab("password")}
          >
            Password
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">

          {/* PERSONAL DETAILS TAB */}
          {activeTab === "personal" && (
            <>
              <div>
                <label className="block font-medium mb-1">Membership ID</label>
                <input
                  type="text"
                  placeholder="Enter your membership ID"
                  value={membershipId}
                  onChange={(e) => setMembershipId(e.target.value)}
                  required
                  className="w-full border rounded-lg px-3 py-2 focus:ring focus:ring-blue-200"
                />
              </div>

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

              <p className="text-blue-700 text-sm text-center cursor-pointer">
                Forgot Membership ID?
              </p>
            </>
          )}

          {/* PASSWORD TAB */}
          {activeTab === "password" && (
            <>
              <div>
                <label className="block font-medium mb-1">Email ID</label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={passwordEmail}
                  onChange={(e) => setPasswordEmail(e.target.value)}
                  required
                  className="w-full border rounded-lg px-3 py-2 focus:ring focus:ring-blue-200"
                />
              </div>

              <div>
                <label className="block font-medium mb-1">Password</label>
                <input
                  type="password"
                  placeholder="Enter password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="w-full border rounded-lg px-3 py-2 focus:ring focus:ring-blue-200"
                />
              </div>

              <p className="text-blue-700 text-sm text-center cursor-pointer">
                Forgot Password?
              </p>
            </>
          )}

          {/* LOGIN BUTTON */}
          <button
            type="submit"
            className="w-full bg-blue-700 text-white py-2 rounded-lg font-medium hover:bg-blue-800 transition"
          >
            Login
          </button>
        </form>
        
      </div>
    </div>
  );
};

export default Login;































/* import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Store login status
    localStorage.setItem("isLoggedIn", "true");

    navigate("/");
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 px-4">
      <div className="w-full max-w-sm bg-white rounded-xl shadow-md p-6 text-center">


        <img src={logo} alt="logo" className="w-28 mx-auto mb-4" />

        <h2 className="text-2xl font-semibold mb-6">Sign In to Your Account</h2>

        <form onSubmit={handleSubmit} className="space-y-4 text-left">

          
          <div>
            <label className="font-medium block mb-1">Email ID</label>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full border border-gray-300 rounded-lg px-3 py-2 outline-none focus:ring focus:ring-blue-200"
            />
          </div>

          <div>
            <label className="font-medium block mb-1">Password</label>
            <input
              type="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full border border-gray-300 rounded-lg px-3 py-2 outline-none focus:ring focus:ring-blue-200"
            />
          </div>

          
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg font-medium hover:bg-blue-700 transition"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login; */