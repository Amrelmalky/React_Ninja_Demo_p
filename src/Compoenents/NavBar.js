import React from "react";
import { Link } from "react-router-dom";
// 1- Using The Link component by import it from react-router-dom package
// 2- instead of anchor tags <a> you can use Link Component
// 3- And instead of href='' => using to =''


export const NavBar = () => {
  return (
    <div className="navbar">
      <h1> The Amr Blog</h1>
      <div className="links">
        <Link to="/"> Home</Link>
        <Link to="/create">New Blog</Link>
      </div>
    </div>
  );
};

export default NavBar;
