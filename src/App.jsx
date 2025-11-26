import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import { useState } from "react";

import Navbar from "./pages/Navbar";
import Programs from "./pages/Programs";
import Memberships from "./pages/Memberships";
import Hostels from "./pages/Hostels";

function AppRouter() {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const goTo = (page) => {
    navigate(page);
    setMenuOpen(false);
  };

  return (
    <div className="relative">

      {/* ROUTES */}
      <Navbar  openMenu={() => setMenuOpen(true)} />
      <Routes>
        <Route path="/" element={<Programs/>} />
        <Route path="/programs" element={<Programs />} />
        <Route path="/memberships" element={<Memberships />} />
        <Route path="/hostels" element={<Hostels />} />
      </Routes>

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
