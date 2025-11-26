export default function MembershipCard({ item }) {
  return (
    <div className="bg-white rounded-xl shadow p-4 mb-4">
      <h3 className="text-lg font-semibold">{item.title}</h3>
      <p className="text-green-600 font-bold mt-1">{item.price}</p>

      <ul className="mt-2 ml-3 list-disc text-sm text-gray-700">
        {item.benefits.map((b, i) => (
          <li key={i}>{b}</li>
        ))}
      </ul>
    </div>
  );
}
