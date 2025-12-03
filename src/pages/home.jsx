import { Link } from "react-router-dom";
import {programs} from '../data/programs'

export default function Home() {
  return (
    <div className="w-full">
      
      {/* ---------- HERO SECTION ---------- */}
      <div
        className="rounded-sm w-full h-[90vh] bg-cover bg-center relative flex items-center"
        style={{
          backgroundImage:
            "url('https://images.pexels.com/photos/672358/pexels-photo-672358.jpeg?auto=compress')",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/30"></div>

        <div className="relative z-10 text-white px-6 max-w-3xl">
          <div className="flex gap-3 text-sm mb-3 opacity-90">
            <span>📍 83+ Destinations</span>
            <span>➡️ Year-round programs</span>
            <span>➡️ Youth-friendly stays</span>
          </div>

          <h1 className="text-4xl font-bold leading-tight mb-4">
            Explore India’s Most <br /> Breathtaking Adventures
          </h1>

          <p className="text-lg opacity-95 leading-7">
            Join Youth Hostels Association of India for affordable,
            eco-friendly treks, expeditions, and stays connecting you
            with nature and culture.
          </p>
        </div>
      </div>
         {/* Buttons */}
          <div className="flex gap-4 mt-6">
            <Link
              to="/programs"
              className="bg-green-900 px-6 py-3 rounded-full font-semibold hover:bg-green-700 transition flex items-center gap-2"
            >
              Programs →
            </Link>

            <Link
              to="/memberships"
              className="bg-green-900 text-black px-6 py-3 rounded-full font-semibold hover:bg-green-700 transition flex items-center gap-2"
            >
              Memberships →
            </Link>

            <Link
              to="/hostels"
              className="bg-green-900 text-black px-6 py-3 rounded-full font-semibold hover:bg-green-700 transition flex items-center gap-2"
            >
              Hostels →
            </Link>
          </div>

      {/* ---------- TYPE FILTER (JUST LIKE IMAGE) ---------- */}
      <div className="px-6 py-6">
        <h2 className="text-lg font-semibold mb-3">Type</h2>

        <div className="flex gap-3">
          <button className="border border-gray-300 px-4 py-2 rounded-full text-sm">
            All
          </button>
          <button className="border border-gray-300 px-4 py-2 rounded-full text-sm">
            Trekking
          </button>
          <button className="border border-gray-300 px-4 py-2 rounded-full text-sm">
            Expeditions
          </button>
          <button className="border border-gray-300 px-4 py-2 rounded-full text-sm">
            Hostel Stays
          </button>
        </div>
      </div>

      <div className="m-3 flex flex-row justify-between">
        <h1 className="">Programs</h1>
        <Link to="/programs"><p>View All</p></Link>
      </div>

      {/* programs list */}
      <div className="flex flex-col gap-4">
    {programs.slice(0, 3).map(p => (
      <div key={p.id} className="m-2 p-4 rounded-lg shadow-sm">
        <img src={p.image} alt={p.name} className="w-full h-60 object-cover rounded-md mb-3" />
        <h3 className="font-semibold text-lg">{p.name}</h3>
        <p className="text-gray-600 text-sm">{p.description}</p>

        <Link
          to={`/program/${p.id}`}
          className="mt-3 inline-block bg-orange-600 text-white px-4 py-2 rounded-md text-sm"
        >
          View More →
        </Link>
      </div>
    ))}
  </div>

    </div>
  );
}
