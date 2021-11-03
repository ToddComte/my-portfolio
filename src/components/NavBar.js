import React from "react";
import { NavLink } from "react-router-dom";
import { SocialIcon } from "react-social-icon";

export default function NavBar() {
  return (
    <header className="bg-blue-600">
      <div className="container mx-auto flex justify-between">
        <nav className="flex">
          <NavLink
            to="/"
            exact
            activeClassName="text-white"
            className="inflex-flex items-center py-6 px-3 mr-4 text-gray-400 hover:text-gray-100 text-4xl font-blod tracking-widest"
          >
            Todd Comte
          </NavLink>
          <NavLink
            to="/post"
            className="inline-flex items-center py-3 px-3 my-6 rounded text-gray-400 hover:text-gray-100"
          >
            Blog Post
          </NavLink>
          <NavLink
            to="/project"
            className="inline-flex items-center py-3 px-3 my-6 rounded text-gray-400 hover:text-gray-100"
          >
            Projects
          </NavLink>
          <NavLink
            to="/about"
            className="inline-flex items-center py-3 px-3 my-6 rounded text-gray-400 hover:text-gray-100"
          >
            About Me!
          </NavLink>
        </nav>
        <div>
          <SocialIcon
            url="https://www.linkedin.com/in/todd-comte-92b06769"
            className="mr-4"
            target="_blank"
            fgColor="#fff"
            style={{ height: 35, width: 35 }}
          />
        </div>
      </div>
    </header>
  );
}
