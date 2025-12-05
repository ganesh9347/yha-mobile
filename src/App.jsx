import { BrowserRouter, Routes, Route, useNavigate, useLocation } from "react-router-dom";
import Login from "./pages/Login";
import { Navigate } from "react-router-dom";
import Footer from './components/Footer';
import { useState } from "react";
import Signup from "./pages/Signup";
import Navbar from "./pages/Navbar";
import Programs from "./pages/Programs";
import ProgramDetails from "./pages/ProgramDetails";
import Home from "./pages/home";
import Memberships from "./pages/Memberships";
import HostelBooking from "./pages/HostelBooking";
import Profile from "./pages/Profile";
import Hostels from "./pages/Hostels";

function AppRouter() {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const goTo = (page) => {
    navigate(page);
    setMenuOpen(false);
  };


  const handleLogout = () => {
    localStorage.removeItem("user"); 
    setMenuOpen(false) // your login storage key
    navigate("/login");
  };

  const isLoggedIn = localStorage.getItem("isLoggedIn");

   const location = useLocation();

   const hideFooter = ["/login", "/signup"].includes(location.pathname);

  return (
    <div className="relative">

      {/* ROUTES */}
      <Navbar  openMenu={() => setMenuOpen(true)} />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={isLoggedIn ? <Home /> : <Navigate to="/login" />} />
        <Route path="/programs" element={<Programs />} />
        <Route path="/memberships" element={<Memberships />} />
        <Route path="/hostels" element={<Hostels />} />
        <Route path="/program/:id" element={<ProgramDetails/>} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/hostel/:id" element={<HostelBooking />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>

       {!hideFooter && <Footer />}

      

      {/* SLIDE MENU */}
      {menuOpen && (
        <div className="absolute top-0 right-0 w-48 bg-white shadow-lg p-4 z-50">

          <button className="text-left w-full py-2" onClick={() => goTo("/programs")}>
            Programs
          </button>

          <button className="text-left w-full py-2" onClick={() => goTo("/memberships")}>
            Memberships
          </button>

          <button className="text-left w-full py-2" onClick={() => goTo("/hostels")}>
            Hostels
          </button>

          <button
          onClick={handleLogout}
          className=" text-lg font-semibold mt-4 border-t pt-4"
          >
          Logout
          </button>

          <button
            className="mt-4 text-red-500"
            onClick={() => setMenuOpen(false)}
          >
            Close
          </button>


        </div>
      )}

    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppRouter />
    </BrowserRouter>
  );
}












/* 
import { useState } from "react";
import Home from "./pages/Home";
import Programs from "./pages/Programs";
import Memberships from "./pages/Memberships";
import Hostels from "./pages/Hostels";

export default function App() {
  const [state, setState] = useState({
    page: "home",
    menuOpen: false
  });

  const navigate = (page) => {
    setState({ ...state, page, menuOpen: false });
  };

  return (
    <div className="relative">

      {state.page === "home" && (
        <Home openMenu={() => setState({ ...state, menuOpen: true })} />
      )}

      {state.page === "programs" && <Programs />}
      {state.page === "memberships" && <Memberships />}
      {state.page === "hostels" && <Hostels />}

      {state.menuOpen && (
        <div className="absolute top-0 left-0 w-48 bg-white shadow-lg p-4 z-50">
          <button
            className="text-left w-full py-2"
            onClick={() => navigate("programs")}
          >
            Programs
          </button>

          <button
            className="text-left w-full py-2"
            onClick={() => navigate("memberships")}
          >
            Memberships
          </button>

          <button
            className="text-left w-full py-2"
            onClick={() => navigate("hostels")}
          >
            Hostels
          </button>

          <button
            className="mt-4 text-red-500"
            onClick={() => setState({ ...state, menuOpen: false })}
          >
            Close
          </button>
        </div>
      )}
    </div>
  );
}  */























/*import Home from './pages/Home'

export default function App() {
  return <Home />
} */
