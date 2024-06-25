import FormButtons from "../FormButtons/FormButtons";
import "./Form.scss";
import WarehouseForm from "../WarehouseForm/WarehouseForm";
import { useState } from "react";

const Form = ({ page }) => {
  const [formValues, setFormValues] = useState({});

  const handleSubmit = () => {
    console.log("Form submitted with values:", formValues);
  };

  const handleWarehouseFormSubmit = (warehouseFormValues) => {
    setFormValues(warehouseFormValues);
  };

  return (
    <form className="form">
      {page === "warehouse" && (
        <WarehouseForm onWarehouseFormSubmit={handleWarehouseFormSubmit} />
      )}
      {page === "inventory" && <h1>Inventory Form</h1>}

      <FormButtons handleSubmit={() => handleWarehouseFormSubmit(formValues)} />
    </form>
  );
};

export default Form;
