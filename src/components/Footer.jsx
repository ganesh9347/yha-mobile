import { Link, useLocation } from "react-router-dom";

const Footer = () => {
  const location = useLocation();

  const menuItems = [
    { name: "Home", path: "/", icon: "🏠" },
    { name: "Programs", path: "/programs", icon: "📚" },
    { name: "Membership", path: "/memberships", icon: "📇" },
    { name: "Hostels", path: "/hostels", icon: "🏨" },
  ];

  return (
    <footer className="fixed bottom-0 left-0 w-full bg-white shadow-md z-50 py-2">
      <div className="flex justify-around items-center text-gray-600 text-sm">

        {menuItems.map((item) => {
          const active = location.pathname === item.path;

          return (
            <Link
              key={item.name}
              to={item.path}
              className={`flex flex-col items-center p-2 transition ${
                active ? "text-red-600 font-semibold" : "text-gray-500"
              }`}
            >
              <span className="text-xl">{item.icon}</span>
              <span>{item.name}</span>
            </Link>
          );
        })}

      </div>
    </footer>
  );
}


export default Footer;