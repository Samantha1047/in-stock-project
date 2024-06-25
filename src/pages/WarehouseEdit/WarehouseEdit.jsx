import "./WarehouseEdit.scss";
import Form from "../../components/Form/Form";
import TitleNav from "../../components/TitleNav/TitleNav";

const WarehouseEdit = () => {
  return (
    <div className="warehouse-edit">
      <TitleNav title="Edit" page="Warehouse" edit={false} />
      <Form page="warehouse" />
    </div>
  );
};

export default WarehouseEdit;
