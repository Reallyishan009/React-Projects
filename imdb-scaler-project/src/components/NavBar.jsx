import React from 'react'
import { Link } from 'react-router-dom';
import logo from "../assets/image2.png"

const NavBar = () => {
  return (
    <div  className='flex items-center space-x-8 pl-3 py-4' >
        <Link to='/'>
            <img className="w-12" src={logo} alt='logo' />
        </Link>
        <Link to="/" className="text-black-300 text-3xl font-medium">Movies</Link>

        <Link to='/watchlist'className="text-black-300 text-3xl font-medium">WatchList</Link>
    </div>
  )
}

export default NavBar;