import React from "react";
import { Link, NavLink } from "react-router-dom";

function NavBar() {
  return (
    <nav>
      <NavLink to="/" className="nav_link">
        Home
      </NavLink>
      <NavLink to="/blogs" className="nav_link">
        Blogs
      </NavLink>
      <NavLink to="/contact" className="nav_link">
        Contact
      </NavLink>
      <NavLink to="/users" className="nav_link">
        Users
      </NavLink>
    </nav>
  );
}

export default NavBar;
