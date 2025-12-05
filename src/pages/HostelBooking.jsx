import React from "react";
import { useParams } from "react-router-dom";

// Example hostel data (replace with your data file)
import { hostels } from "../data/hostels";

export default function HostelBooking() {
  const { id } = useParams();
  const hostel = hostels.find((h) => h.id === Number(id));

  if (!hostel) return <p className="p-4">Hostel not found.</p>;

  return (
    <div className="pb-8 bg-gray-50">

      {/* Top Image */}
      <div className="p-4">
        <img
          src={hostel.image}
          alt="hostel"
          className="w-full h-88 rounded-xl object-cover"
        />

        <h1 className="text-xl font-bold mt-3">{hostel.name}</h1>
        <p className="text-gray-600 mt-1">{hostel.address}</p>
      </div>

      {/* About Section */}
      <div className="bg-white mx-4 p-4 rounded-xl shadow">
        <h2 className="text-lg font-semibold mb-2">About This Hostel</h2>

        <p className="text-gray-700">
          <span className="font-semibold">Tariff:</span><br />
          {hostel.tariff}
        </p>

        <div className="mt-3 space-y-2">
          <p className="flex items-center gap-2 text-gray-700">
            📞 {hostel.phone}
          </p>

          <p className="flex items-center gap-2 text-gray-700">
            ✉️ {hostel.email}
          </p>
        </div>
      </div>

      {/* Available Rooms */}
      <h2 className="mx-4 mt-6 mb-2 text-lg font-semibold">Available Rooms</h2>

      <div className="bg-white mx-4 p-3 rounded-xl shadow">
        <img
          src={hostel.roomImage}
          className="w-full h-40 rounded-xl object-cover"
        />

        <div className="flex justify-between mt-3">
          <div>
            <h3 className="font-semibold">{hostel.roomName}</h3>
            <p className="text-gray-500 text-sm">Max {hostel.maxGuests} guests</p>
          </div>

          <div className="text-right">
            <p className="text-orange-600 font-bold text-lg">₹{hostel.price}</p>
            <p className="text-gray-500 text-sm">per night</p>
          </div>
        </div>
      </div>

      {/* Booking Form */}
      <div className="bg-white mx-4 mt-6 p-4 rounded-xl shadow">
        <h2 className="text-lg font-semibold mb-4">Book Your Stay</h2>

        {/* Select Room */}
        <label className="block font-medium mb-1">Select Room *</label>
        <select className="w-full border px-3 py-2 rounded-lg mb-4">
          <option>
            {hostel.roomName} – ₹{hostel.price}/night (Max {hostel.maxGuests} guests)
          </option>
        </select>

        {/* Number of guests */}
        <label className="block font-medium mb-1">Number of Guests *</label>
        <select className="w-full border px-3 py-2 rounded-lg mb-4">
          <option>1 Guest</option>
          <option>2 Guests</option>
          <option>3 Guests</option>
        </select>

        {/* Dates */}
        <div className="flex gap-3">
          <div className="w-1/2">
            <label className="block font-medium mb-1">Check-in Date *</label>
            <input type="date" className="w-full border px-3 py-2 rounded-lg" />
          </div>

          <div className="w-1/2">
            <label className="block font-medium mb-1">Check-out Date *</label>
            <input type="date" className="w-full border px-3 py-2 rounded-lg" />
          </div>
        </div>

        <button className="w-full mt-5 bg-orange-500 text-white py-3 rounded-lg font-semibold text-center">
          Check Availability
        </button>
      </div>

      {/* Success Message */}
      <div className="mx-4 mt-6 p-4 bg-green-100 text-green-700 rounded-xl border border-green-300">
        ✅ <span className="font-semibold">Great News!</span>
      </div>
    </div>
  );
}
