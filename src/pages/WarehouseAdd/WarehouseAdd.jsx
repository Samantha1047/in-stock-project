import "./WarehouseAdd.scss";
import TitleNav from "../../components/TitleNav/TitleNav";
import Form from "../../components/Form/Form";

const WarehouseAdd = () => {
  return (
    <article className="warehouse-add">
      <TitleNav title="Add New Warehouse" page="Warehouse" edit={false} />
      <Form page="warehouse" mode="add" />
    </article>
  );
};

export default WarehouseAdd;
