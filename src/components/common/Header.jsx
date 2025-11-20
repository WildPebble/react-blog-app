import React, { use } from 'react';
import { Link } from 'react-router';
import { useAuth, useUsername } from '../authWrapper/AuthContext';

function Header(){
  const username= useUsername();
  const {logout} = useAuth();
  return(
  <div className="bg-green-700 background: py-2 px-2 h-10vh flex justify-between z-50 text-white">
    {username ? <h1 className="text-4xl"> {username}'s Blog </h1>:<h1 className="text-4xl">My Blog</h1>}
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
           <li className="px-2">
          {username ? <p onClick={logout}> Logout </p>:<Link to="/login">Login</Link>}
          </li>
      </ul>
    </nav>
  </div>
  );
}

export default Header;