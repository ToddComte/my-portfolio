import React from "react";
import { NavLink } from "react-router-dom";
import { SocialIcon } from "react-social-icon";

export default function NavBar() {
  return (
    <div className="container mx-auto flex justify-between">
      <nav className="flex">
        <NavLink
          to="/"
          exact
          activeClassName="text-white"
          className="inflex-flex items-center py-7 px-3 mr-4 text-gray-400 hover:text-gray-100 text-4xl font-blod tracking-widest"
        >
          Todd Comte
        </NavLink>
        <NavLink
          to="/post"
          activeClassName="text-red-100 bg-red-700"
          className="inline-flex items-center py-3 px-3 my-6 rounded text-gray-400 hover:text-gray-100"
        >
          Blog Post
        </NavLink>
        <NavLink
          to="/project"
          activeClassName="text-red-100 bg-red-700"
          className="inline-flex items-center py-3 px-3 my-6 rounded text-gray-400 hover:text-gray-100"
        >
          Projects
        </NavLink>
        <NavLink
          to="/about"
          activeClassName="text-red-100 bg-red-700"
          className="inline-flex items-center py-3 px-3 my-6 rounded text-gray-400 hover:text-gray-100"
        >
          About Me!
        </NavLink>
      </nav>
      <div className="inline-flex py-3 px-3 my-6">
        <SocialIcon
          url="https://www.linkedin.com/in/todd-comte-92b06769"
          className="mr-4"
          target="_blank"
          fgColor="#fff"
          style={{ height: 35, width: 35 }}
        />
      </div>
    </div>
  );
}
