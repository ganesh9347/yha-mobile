import {useState} from 'react';
import ProgramCard from "../components/ProgramCard";
import { programs } from "../data/programs";
import {Link} from 'react-router-dom';


export default function Programs() {
  const [type, setType] = useState("All");
  const [category, setCategory] = useState("All");
  const [season, setSeason] = useState("All");
  const [state, setState] = useState("All");
  const [search, setSearch] = useState("");

  // Filter Logic
  const filteredPrograms = programs.filter((p) => {
    return (
      (type === "All" || p.type === type) &&
      (category === "All" || p.category === category) &&
      (season === "All" || p.season === season) &&
      (state === "All" || p.state === state) &&
      (search === "" ||
        p.title.toLowerCase().includes(search.toLowerCase()))
    );
  });

  return (
    <div className="p-4 bg-gray-100 space-y-6">

      {/* Page Title */}
      <h1 className="text-xl font-bold md:text-2xl">Programs</h1>

      {/* FILTER BOX */}
      <div className=" bg-gray-100 justify-center shadow-md rounded-xl p-4 space-y-4 md:space-y-0 md:flex md:items-end md:gap-4 md:flex-wrap">

        {/* TYPE */}
        <div className="md:w-1/5">
          <label className="block text-sm font-semibold mb-1">Type</label>
          <select
            value={type}
            onChange={(e) => setType(e.target.value)}
            className="w-full border border-gray-200 rounded-lg p-2"
          >
            <option>All</option>
            <option>Weekend Program</option>
            <option>Adventure</option>
            <option>Training</option>
          </select>
        </div>

        {/* CATEGORY */}
        <div className="md:w-1/5">
          <label className="block text-sm font-semibold mb-1">Category</label>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full border border-gray-200 rounded-lg p-2"
          >
            <option>All</option>
            <option>Cycling</option>
            <option>Hiking</option>
            <option>Nature</option>
          </select>
        </div>

        {/* SEASON */}
        <div className="md:w-1/5">
          <label className="block text-sm font-semibold mb-1">Season</label>
          <select
            value={season}
            onChange={(e) => setSeason(e.target.value)}
            className="w-full border border-gray-200 rounded-lg p-2"
          >
            <option>All</option>
            <option>Winter</option>
            <option>Summer</option>
            <option>Monsoon</option>
          </select>
        </div>

        {/* STATE */}
        <div className="md:w-1/5">
          <label className="block text-sm font-semibold mb-1">State</label>
          <select
            value={state}
            onChange={(e) => setState(e.target.value)}
            className="w-full border border-gray-200 rounded-lg p-2"
          >
            <option>All</option>
            <option>Maharashtra</option>
            <option>Madhya Pradesh</option>
            <option>Delhi</option>
            <option>Karnataka</option>
          </select>
        </div>

        {/* SEARCH BOX */}
        <div className="md:w-[70%]">
          <label className="block text-sm font-semibold mb-1 md:hidden"></label>
          <input
            type="text"
            placeholder="Search Programs"
            className="w-full border border-gray-200  rounded-lg p-2"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        {/* SEARCH BUTTON */}
        <div className="md:w-[12%]">
          <button className="w-full bg-orange-500 text-white py-2 rounded-lg text-center font-semibold md:py-[10px]">
          Search →
          </button>
        </div>
      </div>

      {/* PROGRAM LIST */}
      <div className="space-y-4 pb-6">
        {filteredPrograms.length === 0 ? (
          <p className="text-gray-500 text-center">No programs found</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {filteredPrograms.map((p) => (
            <Link key={p.id} to={`/program/${p.id}`}>
              <ProgramCard item={p} />
            </Link>
          ))}
          </div>
        )}
      </div>
    </div>
  );
}






















/* export default function Programs() {
  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Programs</h1>
      {programs.map(p => 
      <Link key={p.id} to={`/program/${p.id}`}>
      <ProgramCard item={p} />
      </Link>
    )}
    </div>
  );
} */
