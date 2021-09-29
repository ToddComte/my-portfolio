import React from "react";
import { NavLink } from "react-router-dom";

export default function NavBar() {
  return (
    <header className="bg-blue-400">
      <div className="container mx-auto flex justify-between">
        <nav className="flex">
          <NavLink to="/" exact>
            Todd Comte
          </NavLink>
          <NavLink to="/post">Blog Post</NavLink>
          <NavLink to="/project">Projects</NavLink>
          <NavLink to="/about">About Me!</NavLink>
        </nav>
      </div>
    </header>
  );
}
