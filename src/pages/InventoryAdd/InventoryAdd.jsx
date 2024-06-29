import "./InventoryAdd.scss";
import TitleNav from "../../components/TitleNav/TitleNav";
import InventoryForm from "../../components/InventoryForm/InventoryForm";

const InventoryAdd = ({ handleInventorySubmit }) => {
  return (
    <div className="inventory-add">
      <TitleNav title="Add Inventory Item" page="Inventory" edit={false} />
      <InventoryForm mode="add" handleInventorySubmit={handleInventorySubmit} />
    </div>
  );
};

export default InventoryAdd;
