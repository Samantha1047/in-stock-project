import "./InventoryEdit.scss";
import TitleNav from "../../components/TitleNav/TitleNav";
import InventoryForm from "../../components/InventoryForm/InventoryForm";

const InventoryEdit = ({ warehouses, handleInventorySubmit }) => {
  return (
    <div className="inventory-edit">
      <TitleNav title="Edit Inventory Item" page="Inventory" edit={false} />
      <InventoryForm
        mode="edit"
        warehouses={warehouses}
        handleInventorySubmit={handleInventorySubmit}
      />
    </div>
  );
};

export default InventoryEdit;
