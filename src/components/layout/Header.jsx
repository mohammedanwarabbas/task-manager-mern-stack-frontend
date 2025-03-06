import React from "react";
import { NavLink } from "react-router-dom";

const Header = ({isAuthenticated}) => {
  // Handles the click event on navigation links to collapse the navbar menu on mobile view.
  const handleNavLinkClick = () => {
    const navbarCollapse = document.getElementById("navbarText");
    if (navbarCollapse) {
      navbarCollapse.classList.remove("show"); // Collapse the menu
    }
  };

  
  return (
    /* ----------------- navbar ------------- */
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <NavLink className="navbar-brand text-primary" to="/" style={{fontSize:"1.8rem"}}>
        TᗩᔕK ᗰᗩᑎᗩGEᖇ
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarText"
          aria-controls="navbarText"
          aria-expanded="false"
          aria-label="Toggle navigation" 
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarText">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          {isAuthenticated ? (
            <>
            <li className="nav-item">
              <NavLink className="nav-link" aria-current="page" to="/" onClick={handleNavLinkClick}>Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" aria-current="page" to="/task/create" onClick={handleNavLinkClick}>Add Task</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/logout" onClick={handleNavLinkClick} > Logout </NavLink>
            </li>
            </>):(
              <>
              <li className="nav-item">
              <NavLink className="nav-link" to="/register" onClick={handleNavLinkClick} > Register </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/login" onClick={handleNavLinkClick} > Login </NavLink>
            </li>
              </>
            )}
            
            <li className="nav-item">
              <NavLink className="nav-link" to="/about" onClick={handleNavLinkClick}>About</NavLink>
            </li>
            
            
          </ul>
          <span className="navbar-text text-center text-primary">
            Task Manager <span className="text-dark">|</span> All your tasks @ one place
          </span>
        </div>
      </div>
    </nav>
  );
};

export default Header;