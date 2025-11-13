import React from 'react';
import { Link } from 'react-router';

function Header(){
  return(
  <div className="bg-green-700 py-2 px-2 h-10vh flex justify-between z-50 text-white">
    <h1 className="text-4xl">My Blog</h1>
    <nav>
      <ul className="text-xl flex justify-between px-2 ">
        <li className="px-2">
          <Link to="/">Home</Link>
          </li>
        <li className="px-2">
          <Link to="/posts">Blog Posts</Link>
          </li>
        <li className="px-2">
          <Link to="/contact">Contact</Link>
          </li>
      </ul>
    </nav>
  </div>
  );
}

export default Header;