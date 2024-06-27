import "./InventoryEdit.scss";
import TitleNav from "../../components/TitleNav/TitleNav";
import InventoryForm from "../../components/InventoryForm/InventoryForm";

const InventoryEdit = () => {
  return (
    <div className="inventory-edit">
      <TitleNav title="Edit Inventory Item" page="Inventory" edit={false} />
      <InventoryForm mode="edit" />
    </div>
  );
};

export default InventoryEdit;
