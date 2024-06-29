import "./WarehouseAdd.scss";
import TitleNav from "../../components/TitleNav/TitleNav";
import WarehouseForm from "../../components/WarehouseForm/WarehouseForm";

const WarehouseAdd = ({ warehouses, handleWarehouseSubmit }) => {
  return (
    <article className="warehouse-add">
      <TitleNav title="Add New Warehouse" page="Warehouse" edit={false} />
      <WarehouseForm
        mode="add"
        warehouses={warehouses}
      />
    </article>
  );
};

export default WarehouseAdd;
