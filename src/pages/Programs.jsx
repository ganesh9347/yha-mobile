import ProgramCard from "../components/ProgramCard";
import { programs } from "../data/programs";
import {Link} from 'react-router-dom';

export default function Programs() {
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
}
