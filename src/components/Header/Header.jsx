import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/logo/InStock-Logo.svg"
import "./Header.scss"

const Header = () => {
    return (
        <header className="header">
            <Link to="/">
                <img src={logo} alt="inStock logo" className="header__logo" />
            </Link>
            <nav className="header__nav">
                <NavLink to="/warehouses" className={({ isActive }) => (isActive ? "active-link" : "")}>
                    Warehouses
                </NavLink>
                <NavLink to="/inventory" className={({ isActive }) => (isActive ? "active-link" : "")}>
                    Inventory
                </NavLink>
            </nav>
        </header>
    )
}

export default Header;
