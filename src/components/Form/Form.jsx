import FormButtons from "../FormButtons/FormButtons";
import "./Form.scss";
import WarehouseForm from "../WarehouseForm/WarehouseForm";

const Form = ({ page, onSubmit }) => {
  return (
    <form className="form">
      {page === "warehouse" && <WarehouseForm />}
      {page === "inventory" && <h1>Inventory Form</h1>}

      <FormButtons />
    </form>
  );
};

export default Form;
