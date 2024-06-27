import { useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import WarehouseForm from "../WarehouseForm/WarehouseForm";
import FormButtons from "../FormButtons/FormButtons";
import "./Form.scss";
import InventoryForm from "../InventoryForm/InventoryForm";
import { FORM_TYPES } from "../../utils/constants";

const initialFormValues = {
  warehouse: {
    warehouse_name: "",
    address: "",
    city: "",
    country: "",
    contact_name: "",
    contact_position: "",
    contact_phone: "",
    contact_email: "",
  },
  inventory: {
    warehouse_id: "",
    item_name: "",
    description: "",
    category: "",
    status: "",
    quantity: 0,
  },
};

const Form = ({ page, mode }) => {
  const { warehouseId, itemId } = useParams();
  const API_URL = import.meta.env.VITE_APP_API_URL;

  const [formValues, setFormValues] = useState(initialFormValues);
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    const updatedValue = name === "quantity" ? Number(value) : value;
    setFormValues({
      ...formValues,
      [page]: {
        ...formValues[page],
        [name]: updatedValue,
      },
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

  const submitFormData = async (data, url, method) => {
    try {
      const response = await axios[method](`${API_URL}${url}`, data);
      return response.data;
    } catch (error) {
      console.error(error + "Error submitting form data");
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

    if (
      formValues.contact_email &&
      !validateEmail(formValues[page].contact_email)
    ) {
      newErrors.contact_email = "Invalid email address";
    }

    const isValidPhoneNumber = validatePhoneNumber(
      formValues[page].contact_phone
    );
    if (!isValidPhoneNumber) {
      newErrors.contact_phone = "Invalid phone number";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (data) => {
    const values = data;
    const baseUrl =
      page === FORM_TYPES.WAREHOUSE ? "/api/warehouses" : "/api/inventories";
    const url =
      mode === "add"
        ? baseUrl
        : `${baseUrl}/${page === FORM_TYPES.WAREHOUSE ? warehouseId : itemId}`;
    const method = mode === "add" ? "post" : "put";

    if (page === "warehouse") {
      if (validateForm(values)) {
        submitFormData(values, url, method);
        navigate("/");
        setFormValues(initialFormValues);
      } else {
        console.error("Form has errors");
      }
    } else if (page === "inventory") {
      submitFormData(values, url, method);
      navigate("/");
      setFormValues(initialFormValues);
    } else {
      console.error("Form has errors");
    }
  };

  const handleFormSubmit = () => {
    handleSubmit(formValues[page]);
  };

  return (
    <form
      className="form"
      onSubmit={(e) => {
        e.preventDefault();
        handleSubmit(formValues[page]);
      }}
    >
      {page === FORM_TYPES.WAREHOUSE && (
        <WarehouseForm
          formValues={formValues.warehouse}
          handleInputChange={handleInputChange}
          errors={errors}
        />
      )}
      {page === FORM_TYPES.INVENTORY && (
        <InventoryForm
          formValues={formValues.inventory}
          handleInputChange={handleInputChange}
          errors={errors}
        />
      )}

      <FormButtons
        mode={mode}
        page={page}
        handleSubmit={() => handleFormSubmit(formValues)}
      />
    </form>
  );
};

export default Form;
