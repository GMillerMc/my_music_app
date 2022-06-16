import React from 'react';
import { NavLink } from 'react-router-dom';
import './style.css'
import { Outlet } from 'react-router-dom';


export const Header = () => {
    const activeClass = ({ isActive }) => (isActive ? 'current' : undefined)
    return(
    <div>
        <nav>
            <NavLink className={activeClass} to='/'>Home</NavLink>
            <NavLink className={activeClass} to='/about'>About</NavLink>
            <NavLink className={activeClass} to='/music'>Music</NavLink>
            <NavLink className={activeClass} to='/events'>Events</NavLink>
        </nav>
        <Outlet />
    </div>
    )
}
