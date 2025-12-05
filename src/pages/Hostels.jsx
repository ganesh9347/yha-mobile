import {useState} from 'react';
import HostelCard from "../components/HostelCard";
import {Link} from 'react-router-dom'
import { hostels } from "../data/hostels";


export default function Hostels() {
  const [stateFilter, setStateFilter] = useState("All");
  const [cityFilter, setCityFilter] = useState("");
  const [typeFilter, setTypeFilter] = useState("All");
  const [searchText, setSearchText] = useState("");

  // Filtering Logic
  const filteredHostels = hostels.filter(h => {
    const stateMatch = stateFilter === "All" || h.state === stateFilter;
    const cityMatch = cityFilter === "" || h.city.toLowerCase().includes(cityFilter.toLowerCase());
    const typeMatch = typeFilter === "All" || h.type === typeFilter;
    const searchMatch =
      searchText === "" ||
      h.name.toLowerCase().includes(searchText.toLowerCase());

    return stateMatch && cityMatch && typeMatch && searchMatch;
  });

  return (
    <div className="p-4">

      {/* ---------- FILTER UI START ---------- */}
      <div className="bg-gray-100 justify-center shadow-md rounded-xl p-4 space-y-4 md:space-y-0 md:flex md:items-end md:gap-4 md:flex flex-wrap ">

        {/* State */}
        <div className="space-y-1 md:w-3/10">
          <label className="text-sm font-medium">State</label>
          <select
            value={stateFilter}
            onChange={(e) => setStateFilter(e.target.value)}
            className="w-full border border-gray-300 rounded-lg p-2 bg-white"
          >
            <option value="All">All</option>
            <option value="Telangana">Telangana</option>
            <option value="Delhi">Delhi</option>
            <option value="Maharashtra">Maharashtra</option>
          </select>
        </div>

        {/* City */}
        <div className="space-y-1 md:w-3/10">
          <label className="text-sm font-medium">City</label>
          <input
            type="text"
            placeholder="Enter City"
            value={cityFilter}
            onChange={(e) => setCityFilter(e.target.value)}
            className="w-full border border-gray-300 rounded-lg p-2"
          />
        </div>

        {/* Type */}
        <div className="space-y-1 md:w-3/10">
          <label className="text-sm font-medium">Type</label>
          <select
            value={typeFilter}
            onChange={(e) => setTypeFilter(e.target.value)}
            className="w-full border border-gray-300 rounded-lg p-2 bg-white"
          >
            <option value="All">All</option>
            <option value="YHAI">YHAI</option>
            <option value="Private">Private</option>
          </select>
        </div>

        {/* Search Bar */}
        <div className="space-y-1 w-3/5">
          <input
            type="text"
            placeholder="Search Hostels"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            className="w-full border border-gray-300 rounded-lg p-2"
          />
        </div>

        {/* Search Button */}
        <button className="w-1/5 bg-orange-500 text-white py-2 cursor-pointer rounded-lg text-lg font-semibold">
          Search →
        </button>

      </div>
      {/* ---------- FILTER UI END ---------- */}

      {/* ---------- HOSTEL LIST ---------- */}
      <div className="space-y-4 md:grid grid-cols-3">
        {filteredHostels.length ? (
          filteredHostels.map(h => <HostelCard key={h.id} item={h} />)
        ) : (
          <p className="text-gray-500 text-center mt-6">No hostels found</p>
        )}
      </div>

    </div>
  );
}




/* const  Hostels = () => {
  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Hostels</h1>
      <Link to={`/hostel/${hostels.id}`}>
          {hostels.map(h => <HostelCard key={h.id} item={h} />)}
      </Link>
    </div>
  );
}  


export default Hostels;  
*/