import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Profile() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("userData"));
    if (!data) {
      navigate("/login");
    } else {
      setUser(data);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("userData");
    navigate("/login");
  };

  if (!user) return null;

  return (
    <div className="min-h-screen bg-white flex flex-col items-center p-6">
      {/* Title */}
      <h1 className="text-2xl font-bold mb-8">My Profile</h1>

      {/* Avatar + Name Section */}
      <div className="flex flex-col items-center">
        {/* Avatar */}
        <div className="relative">
          <img
            src="https://cdn-icons-png.flaticon.com/512/3177/3177440.png"
            className="w-36 h-36 md:w-40 md:h-40 rounded-full shadow "
            alt="Profile"
          />
          <button className="absolute bottom-2 right-2 bg-blue-600 text-white p-2 rounded-full shadow">
            ✏️
          </button>
        </div>

        {/* Name + Email */}
        <h2 className="mt-4 text-xl font-bold">{user.name}</h2>
        <p className="text-gray-600 text-center">{user.email}</p>
      </div>

      {/* Profile Details Card */}
      <div className="w-full mt-6 bg-white rounded-2xl shadow p-6 border border-gray-200">
        <div className="flex justify-between py-3 ">
          <span className="text-gray-500">Name</span>
          <span className="font-medium">{user.name}</span>
        </div>

        <div className="flex justify-between py-3">
          <span className="text-gray-500">Email</span>
          <span className="font-medium">{user.email}</span>
        </div>

        <div className="flex justify-between py-3">
          <span className="text-gray-500">Date of Birth</span>
          <span className="font-medium">{user.dob}</span>
        </div>
      </div>

      {/* Logout Button */}
      <button
        onClick={handleLogout}
        className="mt-6 w-full bg-blue-600 text-white py-3 font-semibold text-lg rounded-full"
      >
        Logout
      </button>
    </div>
  );
}






















/*import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Profile() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("userData"));
    if (!data) {
      navigate("/login");
    } else {
      setUser(data);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("userData");
    navigate("/login");
  };

  if (!user) return null;

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">My Profile</h1>

      <div className="bg-white p-4 rounded-lg shadow space-y-2">
        <p><strong>Name:</strong> {user.name}</p>
        <p><strong>Email:</strong> {user.email}</p>
        <p><strong>Date of Birth:</strong> {user.dob}</p>
      </div>

      <button
        onClick={handleLogout}
        className="mt-4 w-full bg-red-600 text-white py-2 rounded-lg"
      >
        Logout
      </button>
    </div>
  );
}
*/