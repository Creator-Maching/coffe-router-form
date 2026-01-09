import { NavLink } from "react-router-dom";
import "../App.css";
import { FaHome } from "react-icons/fa";
import { FcAbout } from "react-icons/fc";
import { MdAppRegistration } from "react-icons/md";


  const navStyle = { 
    backgroundColor: "#3450f0", 
    display: "flex", 
    gap: "10px", 
    alignItems: "center",
    borderRadius: "5px",
    padding: "10px",
    textShadow: "2px 2px 4px rgba(0,0,0,0.3)",
    backgroundShadow: "0 4px 6px rgba(0,0,0,0.2)",
  } as const;

export function Nav() {
  return (
    <nav style={navStyle}>
        <NavLink className="navlink" to="/"><FaHome />Home</NavLink>
        <NavLink className="navlink" to="/about"><FcAbout />About</NavLink>
        <NavLink className="navlink" to="/login"><MdAppRegistration />Registration</NavLink>
    </nav>
  );
}