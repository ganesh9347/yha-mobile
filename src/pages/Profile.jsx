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
