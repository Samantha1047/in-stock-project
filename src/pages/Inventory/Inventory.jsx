import "./Inventory.scss";
import InventoryList from "../../components/InventoryList/InventoryList";
import searchIcon from "../../assets/icons/search-24px.svg";
import { useNavigate } from "react-router-dom";
import SearchBar from "../../components/SearchBar/SearchBar";

const Inventory = ({ inventoryList, onDeleteItem }) => {
  const navigate = useNavigate();

  return (
    <main className="inventory">
      <div className="inventory__header">
        <h1 className="inventory__title">Inventory</h1>
        <div>
          {/* <input
            type="text"
            placeholder="Search..."
            className="inventory__search"
          />
          <img
            className="inventory__search-icon"
            src={searchIcon}
            alt="search icon"
          /> */}
          <SearchBar />
          <button
            onClick={() => navigate("/inventory/add")}
            className="inventory__button"
          >
            + Add New Item
          </button>
        </div>
      </div>
      <InventoryList
        showWarehouse={true}
        inventoryList={inventoryList}
        onDeleteItem={onDeleteItem}
      />
    </main>
  );
};

export default Inventory;
