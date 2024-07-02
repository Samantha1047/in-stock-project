import "./WarehouseForm.scss";
import FormField from "../FormField/FormField";
import FormButtons from "../FormButtons/FormButtons";
import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import "./WarehouseForm.scss";
import "../../App.scss";

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

const WarehouseForm = ({ mode, warehouses, handleWarehouseSubmit }) => {
  const [formValues, setFormValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();
  const { warehouseId } = useParams();

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

  useEffect(() => {
    const fetchWarehouses = async (warehouses) => {
      try {
        const item = warehouses.find((item) => item.id == warehouseId);
        setFormValues({
          warehouse_name: item.warehouse_name,
          address: item.address,
          city: item.city,
          country: item.country,
          contact_name: item.contact_name,
          contact_position: item.contact_position,
          contact_phone: item.contact_phone,
          contact_email: item.contact_email,
        });
      } catch (error) {
        console.error(error + "Error fetching warehouse data");
      }
    };

    if (warehouseId && warehouses) {
      fetchWarehouses(warehouses);
    }
  }, [warehouseId]);

  const validatePhoneNumber = (phoneNumber) => {
    const phonePattern = /^\+1 \(\d{3}\) \d{3}-\d{4}$/;
    return phonePattern.test(phoneNumber);
  };

  const submitWarehouseData = async (data, url, method) => {
    await handleWarehouseSubmit(data, url, method);
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
    return newErrors;
  };

  const handleSubmit = async (values) => {
    const newErrors = validateForm();
    if (Object.keys(newErrors).length === 0) {
      const modeConfig = {
        add: {
          url: "/api/warehouses",
          method: "post",
        },
        edit: {
          url: `/api/warehouses/${warehouseId}`,
          method: "put",
        },
      };
      const { url, method } = modeConfig[mode];

      try {
        await submitWarehouseData(values, url, method);
        navigate("/");
        setFormValues(initialValues);
      } catch (error) {
        console.error("Error submitting warehouse data:", error);
      }
    } else {
      console.error("Form has errors", newErrors);
    }
  };

  const handleWarehouseFormSubmit = () => {
    handleSubmit(formValues);
  };
  return (
    <form
      className="warehouse-form"
      onSubmit={(e) => {
        e.preventDefault();
        handleSubmit(formValues);
      }}
    >
      <div className="warehouse-form__fields">
        <section className="warehouse-form__details-section">
          <div className="wrapper">
            <h2 className="warehouse-form__title">Warehouse Details</h2>
            <FormField
              label="Warehouse Name"
              type="text"
              name="warehouse_name"
              value={formValues.warehouse_name}
              onChange={handleInputChange}
              placeholder="Warehouse Name"
              error={errors.warehouse_name}
            />

            <FormField
              label="Street Address"
              type="text"
              name="address"
              value={formValues.address}
              onChange={handleInputChange}
              placeholder="Street Address"
              error={errors.address}
            />

            <FormField
              label="City"
              type="text"
              name="city"
              value={formValues.city}
              onChange={handleInputChange}
              placeholder="City"
              error={errors.city}
            />

            <FormField
              label="Country"
              type="text"
              name="country"
              value={formValues.country}
              onChange={handleInputChange}
              placeholder="Country"
              error={errors.country}
            />
          </div>
        </section>
        <section className="warehouse-form__contact-section">
          <div className="wrapper">
            <h2 className="warehouse-form__title">Contact Details</h2>
            <FormField
              label="Contact Name"
              type="text"
              name="contact_name"
              value={formValues.contact_name}
              onChange={handleInputChange}
              placeholder="Contact Name"
              error={errors.contact_name}
            />

            <FormField
              label="Position"
              type="text"
              name="contact_position"
              value={formValues.contact_position}
              onChange={handleInputChange}
              placeholder="Position"
              error={errors.contact_position}
            />

            <FormField
              label="Phone Number"
              type="tel"
              name="contact_phone"
              value={formValues.contact_phone}
              onChange={handleInputChange}
              placeholder="Phone Number"
              error={errors.contact_phone}
            />

            <FormField
              label="Email"
              type="email"
              name="contact_email"
              value={formValues.contact_email}
              onChange={handleInputChange}
              placeholder="Email"
              error={errors.contact_email}
            />
          </div>
        </section>
      </div>

      <FormButtons
        mode={mode}
        page="warehouse"
        handleSubmit={() => handleWarehouseFormSubmit(formValues)}
        handleBack={() => navigate("/")}
      />
    </form>
  );
};

export default WarehouseForm;
