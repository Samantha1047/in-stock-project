import "./InventoryEdit.scss";
import Form from "../../components/Form/Form";
import TitleNav from "../../components/TitleNav/TitleNav";

const InventoryEdit = () => {
  return (
    <div className="inventory-edit">
      <TitleNav title="Edit Inventory Item" page="Inventory" edit={false} />
      <Form mode="edit" page="inventory" />
    </div>
  );
};

export default InventoryEdit;
