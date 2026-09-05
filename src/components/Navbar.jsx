import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/" className="logo">
        <span>✚</span> CarePlus
      </Link>

      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/doctors">Doctors</Link>
        <Link to="/services">Services</Link>
        <Link to="/appointments">Appointments</Link>
        <Link to="/patients">Patients</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </nav>
  );
}

export default Navbar;