export default function Home({ openMenu }) {
  return (
    <div className="px-4 py-4 bg-gray-100 min-h-10">

      <header className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">Y</div>
          <div className="text-lg font-semibold">YHA India</div>
        </div>

        <button
          aria-label="menu"
          onClick={openMenu}
          className="p-2 rounded-lg bg-white shadow"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </header>

    </div>
  );
}





























/*import SectionTitle from '../components/SectionTitle'
import ProgramCard from '../components/ProgramCard'
import MembershipCard from '../components/MembershipCard'
import HostelCard from '../components/HostelCard'

import { programs } from '../data/programs'
import { memberships } from '../data/memberships'
import { hostels } from '../data/hostels'

export default function Home() {
  return (
    <div className="px-4 py-4 bg-gray-100 min-h-screen">
      <header className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">Y</div>
          <div className="text-lg font-semibold">YHA India</div>
        </div>
        <div className="p-2">
          <button aria-label="menu" className="p-2 rounded-lg bg-white shadow">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </header>

      <main className="mt-4">
        <SectionTitle title="Programs" />
        {programs.map(p => <ProgramCard key={p.id} item={p} />)}

        <SectionTitle title="Memberships" />
        {memberships.map(m => <MembershipCard key={m.id} item={m} />)}

        <SectionTitle title="Hostels" />
        {hostels.map(h => <HostelCard key={h.id} item={h} />)}
      </main>
    </div>
  )
}  */
