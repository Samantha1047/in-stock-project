import "./Warehouse.scss";

import WarehouseList from "../../components/WarehouseList/WarehouseList";
import searchIcon from "../../assets/icons/search-24px.svg";
import { useNavigate } from "react-router-dom";

const Warehouse = ({ warehouses, handleWarehouseDelete }) => {
  const navigate = useNavigate();

  return (
    <main className="warehouse">
      <div className="warehouse__header">
        <h1 className="warehouse__title">Warehouses</h1>
        <div>
          <input
            type="text"
            placeholder="Search..."
            className="warehouse__search"
          />
          <img
            className="warehouse__search-icon"
            src={searchIcon}
            alt="search icon"
          />
          <button
            onClick={() => navigate("/add")}
            className="warehouse__button"
          >
            + Add New Warehouse
          </button>
        </div>
      </div>
      <WarehouseList
        warehouses={warehouses}
        handleWarehouseDelete={handleWarehouseDelete}
      />
    </main>
  );
};

export default Warehouse;
