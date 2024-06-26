import "./WarehouseEdit.scss";
import Form from "../../components/Form/Form";
import TitleNav from "../../components/TitleNav/TitleNav";

const WarehouseEdit = () => {
  return (
    <article className="warehouse-edit">
      <TitleNav title="Edit Warehouse" page="Warehouse" edit={false} />
      <Form mode="edit" page="warehouse" />
    </article>
  );
};

export default WarehouseEdit;
