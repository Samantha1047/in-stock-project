import { NavLink } from 'react-router-dom'
import { useState } from 'react'
import logo from '../../assets/logo/InStock-Logo.svg'
import './Header.scss'

const Header = () => {
    const [activeLink, setActiveLink] = useState('warehouses')

    return (
        <header className='header'>
            <NavLink to='/' onClick={() => setActiveLink('warehouses')}>
                <img src={logo} alt='InStock Logo' className='header__logo' />
            </NavLink>
            <nav className='header__nav'>
                <NavLink
                    to='/warehouses'
                    className={({ isActive }) =>
                        `header__nav-link ${isActive || activeLink === "warehouses" ? 'header__nav-link--active' : ''}`
                    }
                    onClick={() => setActiveLink('warehouses')}
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
