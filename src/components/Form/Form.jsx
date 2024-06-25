import FormButtons from "../FormButtons/FormButtons";
import "./Form.scss";
import WarehouseForm from "../WarehouseForm/WarehouseForm";
import { useState } from "react";
const initialValues = {
  warehouse_name: "",
  address: "",
  city: "",
  country: "",
  contact_name: "",
  contact_position: "",
  contact_phone: "",
  contact_email: "",
};

const Form = ({ page }) => {
  const [formValues, setFormValues] = useState(initialValues);
  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
    setErrors({
      ...errors,
      [name]: "",
    });
  };

  const validateForm = () => {
    const newErrors = {};
    Object.keys(formValues).forEach((key) => {
      if (!formValues[key]) {
        newErrors[key] = `The field ${key} is required`;
      }
    });
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (values) => {
    if (validateForm()) {
      //to be submiteed to back end
      console.log("Form submitted with values:", values);
    } else {
      console.error("Form has errors");
    }
  };

  return (
    <form
      className="form"
      onSubmit={(e) => {
        e.preventDefault();
        handleSubmit(formValues);
      }}
    >
      {page === "warehouse" && (
        <WarehouseForm
          formValues={formValues}
          handleInputChange={handleInputChange}
        />
      )}
      {page === "inventory" && <h1>Inventory Form</h1>}

      <FormButtons handleSubmit={() => handleWarehouseFormSubmit(formValues)} />
    </form>
  );
};

export default Form;
