import axios from "axios";
import { v4 as uuidv4 } from "uuid";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import DropDown from "../DropDown/DropDown";
import FormField from "../FormField/FormField";
import ErrorText from "../ErrorText/ErrorText";
import FormButtons from "../FormButtons/FormButtons";

import { INVENTORY_STOCK } from "../../utils/constants";
import "./InventoryForm.scss";
import "../../App.scss";

const API_URL = import.meta.env.VITE_APP_API_URL;

const initialValues = {
  warehouse_id: "",
  item_name: "",
  description: "",
  category: "",
  status: INVENTORY_STOCK.OUT_OF_STOCK,
  quantity: 0,
};

const categoryOptions = [
  { name: "Electronics", id: uuidv4() },
  { name: "Accessories", id: uuidv4() },
  { name: "Gear", id: uuidv4() },
  { name: "Apparel", id: uuidv4() },
  { name: "Health", id: uuidv4() },
];

const InventoryForm = ({ mode, warehouses, handleInventorySubmit }) => {
  const [formValues, setFormValues] = useState(initialValues);

  const [errors, setErrors] = useState({});
  const navigate = useNavigate();
  const { itemId } = useParams();

  const fetchItemData = async (warehouses) => {
    try {
      const { data } = await axios.get(`${API_URL}/api/inventories/${itemId}`);
      const item = data[0];
      const findMatchingWarehouse = warehouses.find(
        (warehouse) => warehouse.warehouse_name === item.warehouse_name
      );

      setFormValues({
        warehouse_id: findMatchingWarehouse?.id,
        item_name: item.item_name,
        description: item.description,
        category: item.category,
        status: item.status,
        quantity: item.quantity,
      });
    } catch (error) {
      console.error(error + " Error fetching item data");
    }
  };

  useEffect(() => {
    if (itemId && warehouses) {
      fetchItemData(warehouses);
    }
  }, [itemId]);

  if (!warehouses) {
    return <div>Loading Form...</div>;
  }

  const warehouseNames = warehouses?.map((warehouse) => ({
    name: warehouse.warehouse_name,
    id: warehouse.id,
  }));

  const inStockText =
    formValues.status === INVENTORY_STOCK.OUT_OF_STOCK ? "text-inactive" : "";
  const outOfStockText =
    formValues.status === INVENTORY_STOCK.IN_STOCK ? "text-inactive" : "";

  const inStockInput =
    formValues.status === INVENTORY_STOCK.OUT_OF_STOCK ? "input-inactive " : "";
  const outOfStockInput =
    formValues.status === INVENTORY_STOCK.IN_STOCK ? "input-inactive " : "";

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    let updatedValue = value;

    if (name === "quantity") {
      updatedValue = value === "" ? "" : Number(value);
    }

    setFormValues({
      ...formValues,
      [name]: updatedValue,
    });

    setErrors({
      ...errors,
      [name]: "",
    });
  };

  const submitData = async (data, url, method) => {
    await handleInventorySubmit(data, url, method);
  };

  const validateForm = () => {
    const newErrors = {};
    Object.keys(formValues).forEach((key) => {
      if (formValues[key] === "" || formValues[key] === undefined) {
        newErrors[key] = "This field is required";
      }
    });
    setErrors(newErrors);
    return newErrors;
  };

  const handleSubmit = async (values) => {
    const newErrors = validateForm();
    console.log("newErrors", newErrors);
    if (Object.keys(newErrors).length === 0) {
      const modeConfig = {
        add: {
          url: "/api/inventories",
          method: "post",
        },
        edit: {
          url: `/api/inventories/${itemId}`,
          method: "put",
        },
      };
      const { url, method } = modeConfig[mode];
      try {
        await submitData(values, url, method);
        navigate(-1);
        window.scrollTo(0, 0);
        setFormValues(initialValues);
      } catch (error) {
        console.error("Error submitting inventory data:", error);
      }
    } else {
      console.error("Inventory Form has errors", newErrors);
    }
  };

  const handleFormSubmit = () => {
    handleSubmit(formValues);
  };

  return (
    <form
      className="inventory-form"
      onSubmit={(e) => {
        e.preventDefault();
        handleSubmit(formValues);
      }}
    >
      <div className="inventory-form__inputs">
        <section className="inventory-form__item-section">
          <div className="wrapper">
            <h2 className="inventory-form__title">Item Details</h2>

            <FormField
              label="Item Name"
              type="text"
              name="item_name"
              value={formValues.item_name}
              onChange={handleInputChange}
              placeholder="Item Name"
              error={errors.item_name}
            />

            <FormField
              label="Description"
              type="text"
              name="description"
              value={formValues.description}
              onChange={handleInputChange}
              placeholder="Please enter a brief item description..."
              error={errors.description}
              input="textarea"
            />
            <fieldset className="inventory-form__input-container">
              <label className="inventory-form__label" htmlFor="category">
                Category
              </label>
              <DropDown
                name="category"
                handleInputChange={handleInputChange}
                value={formValues.category}
                errors={errors.category}
                categoryList={categoryOptions}
                valueKey="name"
              />
            </fieldset>
          </div>
        </section>
        <section className="inventory-form__availability-section">
          <div className="wrapper">
            <h2 className="inventory-form__title">Item Availability</h2>
            <fieldset className="inventory-form__input-container">
              <p className="inventory-form__label" htmlFor="itemName">
                Status
              </p>
              <section className="inventory-form__radio-container">
                <div
                  className="inventory-form__radio-input"
                  value={formValues.status}
                >
                  <input
                    className={`inventory-form__radio ${inStockInput}`}
                    type="radio"
                    id="inStock"
                    name="status"
                    value={INVENTORY_STOCK.IN_STOCK}
                    onChange={handleInputChange}
                    checked={formValues.status === INVENTORY_STOCK.IN_STOCK}
                  />
                  <label className={`${inStockText}`} htmlFor="inStock">
                    In Stock
                  </label>
                </div>
                <div className="inventory-form__radio-input">
                  <input
                    className={`inventory-form__radio ${outOfStockInput}  `}
                    type="radio"
                    id="outOfStock"
                    name="status"
                    value={INVENTORY_STOCK.OUT_OF_STOCK}
                    onChange={handleInputChange}
                    checked={formValues.status === INVENTORY_STOCK.OUT_OF_STOCK}
                  />
                  <label className={`${outOfStockText}`} htmlFor="outOfStock">
                    Out of Stock
                  </label>
                </div>
              </section>
              {errors.status && <ErrorText />}
            </fieldset>

            {formValues.status === INVENTORY_STOCK.IN_STOCK && (
              <fieldset className="inventory-form__input-container">
                <label className="inventory-form__label" htmlFor="category">
                  Quantity
                </label>
                <input
                  className="inventory-form__input"
                  type="number"
                  name="quantity"
                  value={formValues.quantity}
                  onChange={handleInputChange}
                  placeholder="0"
                />
                {errors.quantity && <ErrorText />}
              </fieldset>
            )}

            <fieldset className="inventory-form__input-container">
              <label className="inventory-form__label" htmlFor="category">
                Warehouse
              </label>
              <DropDown
                name="warehouse_id"
                value={formValues.warehouse_id}
                handleInputChange={handleInputChange}
                errors={errors.warehouse_id}
                categoryList={warehouseNames}
                valueKey="id"
              />
            </fieldset>
          </div>
        </section>
      </div>
      <FormButtons
        mode={mode}
        page="inventory"
        handleSubmit={() => handleFormSubmit(formValues)}
        handleBack={() => navigate("/inventory")}
      />
    </form>
  );
};

export default InventoryForm;
