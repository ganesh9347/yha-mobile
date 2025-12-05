import {Link} from "react-router-dom"



export default function HostelCard({ item }) {
  return (
    <div className="bg-white rounded-xl shadow p-4 mb-4">
      <img src={item.image} alt={item.name} className="rounded-lg mb-2 w-full object-cover h-55" />
      <h3 className="text-lg font-semibold">{item.name}</h3>
      <p className="text-sm text-gray-600">{item.location}</p>
      <p className="text-blue-600 font-bold mt-1">{item.price}</p>
      <div className="flex flex-row justify-center">
        <Link className="mt-2 w-full" to={`/hostel/${item.id}`}>
           <button className="cursor-pointer h-9 w-full text-white bg-orange-500 rounded-lg">View Rooms</button>
        </Link>
      </div>
    </div>
  );
}
