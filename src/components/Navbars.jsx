
import { useState } from "react";
import { NavLink } from "react-router-dom";
import "../styles/Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
    const closeMenu = () => setMenuOpen(false);


  return (
    <header className="header">
      <nav className="navbar">
        {/* Logo */}
        <NavLink to="/" className="logo" aria-label="Home">
          <img src="../logo.jpg" alt="Coffee shop logo" />
        </NavLink>

        {/* Hamburger button */}
        <button
          className={`burger ${menuOpen ? "open" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          aria-controls="nav-links"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        {/* Navigation links */}
        <div
          id="nav-links"
          className={`nav-links ${menuOpen ? "show" : ""}`}
        >
          <NavLink
            to="/"
            onClick={() => setMenuOpen(false)}
          >
            Home
          </NavLink>

          <NavLink to="/about" onClick={() => setMenuOpen(false)}>
            About Us
          </NavLink>

          <NavLink to="/menu" onClick={() => setMenuOpen(false)}>
            Menu
          </NavLink>

          <NavLink to="/branches" onClick={() => setMenuOpen(false)}>
            Branches
          </NavLink>

          <NavLink to="/franchise" onClick={() => setMenuOpen(false)}>
            Franchise Inquiries
          </NavLink>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
