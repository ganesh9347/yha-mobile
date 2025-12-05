import {Link,  useNavigate} from 'react-router-dom'
import {useState, useEffect} from 'react'
import logo from "../assets/logo.png";



export default function Navbar({ openMenu }) {
  const navigate = useNavigate();

  const [username, setUsername] = useState();

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("userData"));
    if (storedUser && storedUser.name) {
      setUsername(storedUser.name);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user"); 
    navigate("/login");
  };


  return (
    <nav className="h-25">
      <div className="flex items-center bg-white-100 justify-between h-25">

    
          <Link to="/" className="h-12 flex items-center"><img
            src={logo}
            alt="logo"
            className="w-full h-14 object-contain" 
          />
          </Link>

          <div className="flex items-center gap-4">

          {username && (
            <span className="font-semibold text-gray-700 text-lg">
              Hi, {username}
            </span>
          )}
          </div>

          
          <Link to="/profile" className="mr-4 font-semibold">
                <img
               src="https://cdn-icons-png.flaticon.com/512/3177/3177440.png"
              alt="Profile"
               className="w-8 h-8 rounded-full cursor-pointer hover:opacity-80"
            />
          </Link>

      </div>

    </nav>
  );
} 








































