import ProgramCard from "../components/ProgramCard";
import { programs } from "../data/programs";

export default function Programs() {
  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Programs</h1>
      {programs.map(p => <ProgramCard key={p.id} item={p} />)}
    </div>
  );
}
