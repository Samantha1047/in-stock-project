import "./WarehouseEdit.scss";
import TitleNav from "../../components/TitleNav/TitleNav";
import WarehouseForm from "../../components/WarehouseForm/WarehouseForm";

const WarehouseEdit = ({ warehouses, handleWarehouseSubmit }) => {
  return (
    <article className="warehouse-edit">
      <TitleNav title="Edit Warehouse" page="Warehouse" edit={false} />
      <WarehouseForm
        mode="edit"
        warehouses={warehouses}
      />
    </article>
  );
};

export default WarehouseEdit;
