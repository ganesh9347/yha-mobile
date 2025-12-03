import HostelCard from "../components/HostelCard";
import {Link} from 'react-router-dom'
import { hostels } from "../data/hostels";

const  Hostels = () => {
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