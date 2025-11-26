import MembershipCard from "../components/MembershipCard";
import { memberships } from "../data/memberships";

 const Memberships =() =>{
  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Memberships</h1>
      {memberships.map(m => <MembershipCard key={m.id} item={m} />)}
    </div>
  );
}

export default Memberships
