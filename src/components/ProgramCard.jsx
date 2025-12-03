import {Link} from 'react-router-dom'


export default function ProgramCard({ item }) {
  return (
    <div className="bg-white rounded-xl shadow p-4 mb-4">
      <img src={item.image} alt={item.title} className="rounded-lg mb-2 w-full object-cover h-40" />
      <h3 className="text-lg font-semibold">{item.title}</h3>
      <p className="text-sm text-gray-600 mt-1">{item.description}</p>
      <div className="flex flex-row justify-left">
        <Link className="mt-2 w-full" to={`/program/${item.id}`}>
             <button className="cursor-pointer h-9 w-full text-white bg-orange-500 rounded-lg">View More</button>
        </Link>
      </div>
    </div>
  );
}
