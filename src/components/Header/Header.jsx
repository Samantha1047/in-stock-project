import { NavLink } from 'react-router-dom'
import { useState } from 'react'
import logo from '../../assets/logo/InStock-Logo.svg'
import './Header.scss'

const Header = () => {

    return (
        <header className='header'>
            <NavLink to='/'>
                <img src={logo} alt='InStock Logo' className='header__logo' />
            </NavLink>
            <nav className='header__nav'>
                <NavLink
                    to='/'
                    className={({ isActive }) =>
                        `header__nav-link ${isActive || window.location.pathname === '/' ? 'header__nav-link--active' : ''}`
                    }
                >
                    Warehouses
                </NavLink>
                <NavLink
                    to='/inventory'
                    className={({ isActive }) =>
                        `header__nav-link ${isActive ? 'header__nav-link--active' : ''}`
                    }
                    onClick={() => setActiveLink('inventory')}
                >
                    Inventory
                </NavLink>
            </nav>
        </header>
    )
}

export default Header
