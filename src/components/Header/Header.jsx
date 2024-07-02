import { NavLink } from "react-router-dom";
import logo from "../../assets/logo/InStock-Logo.svg";
import "./Header.scss";

const Header = () => {
  return (
    <header className="header">
      <div className="header__wrapper">
        <NavLink to="/">
          <img src={logo} alt="InStock Logo" className="header__logo" />
        </NavLink>
        <nav className="header__nav">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `header__nav-link ${
                isActive || !window.location.pathname.includes("/inventory")
                  ? "header__nav-link--active"
                  : ""
              }`
            }
          >
            Warehouses
          </NavLink>
          <NavLink
            to="/inventory"
            className={({ isActive }) =>
              `header__nav-link ${
                window.location.pathname.includes("/inventory")
                  ? "header__nav-link--active"
                  : ""
              }`
            }
          >
            Inventory
          </NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Header;
