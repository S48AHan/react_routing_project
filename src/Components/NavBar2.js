import React from "react";
import { NavLink } from "react-router-dom";
function NavBar2() {
  return (
    <nav>
      <NavLink to="/" className="nav_link">
        Home
      </NavLink>
      <NavLink to="/about" className="nav_link">
        About
      </NavLink>
      <NavLink to="/addBlog" className="nav_link">
        Add Block
      </NavLink>
    </nav>
  );
}

export default NavBar2;
