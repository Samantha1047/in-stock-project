import "./InventoryAdd.scss";
import TitleNav from "../../components/TitleNav/TitleNav";
import InventoryForm from "../../components/InventoryForm/InventoryForm";

const InventoryAdd = () => {
  return (
    <div className="inventory-add">
      <TitleNav title="Add Inventory Item" page="Inventory" edit={false} />
      <InventoryForm mode="add" />
    </div>
  );
};

export default InventoryAdd;
