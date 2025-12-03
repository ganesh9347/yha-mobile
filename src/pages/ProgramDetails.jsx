import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { programs } from "../data/programs";
import { Link } from "react-router-dom";

export default function ProgramDetails() {
    const {id} = useParams()
    const program = programs.find(p => p.id === Number(id))


  const [openAccordion, setOpenAccordion] = useState(false);

  if (!program) return <p className="p-4">Program not found.</p>;

  return (
    <div className="w-full pb-20 bg-white">

      {/* Header Image */}
      <img
        src={program.image}
        alt="program"
        className="w-full h-48 object-cover rounded-b-lg"
      />

      {/* Tabs */}
      <div className="flex justify-around px-2 mt-4 text-gray-600 text-sm">
        <span className="text-green-600 font-semibold border-b-2 border-green-600 pb-1">
          Overview
        </span>
        <span>Day Wise Schedule</span>
        <span>Facts</span>
        <span>Reporting Date</span>
      </div>

      {/* Price Row */}
      <div className="flex justify-between items-center px-4 mt-6">
        <h2 className="text-xl font-bold">₹7000/person</h2>
        <button className="text-orange-500 font-semibold text-sm flex items-center">
          Book Program →
        </button>
      </div>

      {/* Month Header */}
      <div className="flex justify-between items-center px-6 mt-8">
        <button className="text-xl">‹</button>
        <h3 className="text-lg font-semibold">October 2025</h3>
        <button className="text-xl">›</button>
      </div>

      {/* Week Names */}
      <div className="grid grid-cols-7 text-center text-gray-500 mt-4 text-sm px-4">
        <span>Mon</span><span>Tue</span><span>Wed</span><span>Thu</span><span>Fri</span><span>Sat</span><span>Sun</span>
      </div>

      {/* Calendar Dates */}
      <div className="grid grid-cols-7 text-center text-gray-400 mt-4 px-4 text-sm gap-y-3">
        <span>1</span><span>2</span><span>3</span><span>4</span><span>5</span><span>6</span><span>7</span>
        <span>8</span><span>9</span><span>10</span><span>11</span><span>12</span><span>13</span><span>14</span>
        <span>15</span><span>16</span><span>17</span><span>18</span><span>19</span><span>20</span><span>21</span>
        <span>22</span><span>23</span><span>24</span><span>25</span><span>26</span><span>27</span><span>28</span>
        <span>29</span><span>30</span><span>31</span>
      </div>

      {/* Details Section */}
      <div className="px-4 mt-6 text-sm space-y-4 bg-gray-100 rounded-md">
        <p className="flex justify-between">
          <span className="text-gray-600">Reporting Point:</span>
          <span className="font-semibold">International Youth Hostel Mysore</span>
        </p>

        <p className="flex justify-between">
          <span className="text-gray-600">Remaining Seats:</span>
          <span className="font-semibold">0</span>
        </p>

        <p className="flex justify-between">
          <span className="text-gray-600">Selected Date:</span>
          <span className="font-semibold text-red-500">No date selected</span>
        </p>
      </div>

      <div className="flex justify-center mt-6">
      <button className="text-white w-full h-10 bg-orange-500 rounded-md">Book</button>
       </div>

      {/* Accordion */}
      <div className="mt-6 border-t">
        <button
          className="w-full flex justify-between items-center px-4 py-3 text-base font-semibold"
          onClick={() => setOpenAccordion(!openAccordion)}
        >
          Why Book With Us?
          <span>{openAccordion ? "▲" : "▼"}</span>
        </button>

        {openAccordion && (
          <div className="px-4 pb-4 text-gray-600 text-sm">
            <p>No hassle booking guarantee.</p>
            <p>Our Destination expert will be happy to help you resolve queries for this tour.</p>
          </div>
        )}
      </div>

      <div className="w-full flex flex-col items-center">
        <h1>{program.description}</h1>
      </div>


      {/* Bottom Book Now Button */}
      <div className="fixed bottom-0 left-0 w-full bg-white px-4 py-3 shadow-[0_-2px_10px_rgba(0,0,0,0.1)]">
        <button className="w-full bg-orange-500 text-white py-3 rounded-lg font-semibold">
          Book Now →
        </button>
      </div>
    </div>
  );
}
