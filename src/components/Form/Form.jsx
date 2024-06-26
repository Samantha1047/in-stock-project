import { useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import WarehouseForm from "../WarehouseForm/WarehouseForm";
import FormButtons from "../FormButtons/FormButtons";
import "./Form.scss";

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

const Form = ({ page, mode }) => {
  const { warehouseId } = useParams();
  const API_URL = import.meta.env.VITE_APP_API_URL;

  const [formValues, setFormValues] = useState(initialValues);
  const [errors, setErrors] = useState({});

  const navigate = useNavigate();

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

  const validatePhoneNumber = (phoneNumber) => {
    const phonePattern = /^\+1 \(\d{3}\) \d{3}-\d{4}$/;
    return phonePattern.test(phoneNumber);
  };

  const submitWarehouseDate = async (warehouse, url, method) => {
    console.log(warehouse, url, method);
    try {
      const response = await axios[method](`${API_URL}${url}`, warehouse);
      console.log(response.data);
      return response.data;
    } catch (error) {
      console.error(error + "Error editing warehouse");
    }
  };

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  const validateForm = () => {
    const newErrors = {};
    Object.keys(formValues).forEach((key) => {
      if (!formValues[key]) {
        newErrors[key] = "This field is required";
      }
    });

    if (formValues.contact_email && !validateEmail(formValues.contact_email)) {
      newErrors.contact_email = "Invalid email address";
    }

    const isValidPhoneNumber = validatePhoneNumber(formValues.contact_phone);
    if (!isValidPhoneNumber) {
      newErrors.contact_phone = "Invalid phone number";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (values) => {
    if (validateForm()) {

      const url =
        mode === "add" ? "/api/warehouses" : `/api/warehouses/${warehouseId}`;
      const method = mode === "add" ? "post" : "put";
      submitWarehouseDate(values, url, method);

      setTimeout(() => {
        navigate("/");
        setFormValues(initialValues);
      }, 2000);
    } else {
      console.error("Form has errors");
    }
  };

  const handleWarehouseFormSubmit = () => {
    handleSubmit(formValues);
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
          errors={errors}
          mode={mode}
        />
      )}
      {page === "inventory" && (
        <WarehouseForm
          formValues={formValues}
          handleInputChange={handleInputChange}
          errors={errors}
        />
      )}

      <FormButtons
        mode={mode}
        page={page}
        handleSubmit={() => handleWarehouseFormSubmit(formValues)}
      />
    </form>
  );
};

export default Form;
