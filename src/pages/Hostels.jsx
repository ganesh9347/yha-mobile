import HostelCard from "../components/HostelCard";
import { hostels } from "../data/hostels";

const  Hostels = () => {
  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Hostels</h1>
      {hostels.map(h => <HostelCard key={h.id} item={h} />)}
    </div>
  );
}


export default Hostels;