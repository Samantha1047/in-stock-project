import DropDown from "../DropDown/DropDown";
import FormField from "../FormField/FormField";
import "./InventoryForm.scss";
import "../../App.scss";
import ErrorText from "../ErrorText/ErrorText";
import { INVENTORY_STOCK } from "../../utils/constants";

const InventoryForm = ({ formValues, handleInputChange, errors, mode }) => {
  const inStockText =
    formValues.status === INVENTORY_STOCK.OUT_OF_STOCK ? "text-inactive" : "";
  const outOfStockText =
    formValues.status === INVENTORY_STOCK.IN_STOCK ? "text-inactive" : "";

  const inStockInput =
    formValues.status === INVENTORY_STOCK.OUT_OF_STOCK ? "input-inactive " : "";
  const outOfStockInput =
    formValues.status === INVENTORY_STOCK.IN_STOCK ? "input-inactive " : "";
  return (
    <div className="inventory-form">
      <section className="inventory-form__item-section">
        <div className="wrapper">
          <h2 className="inventory-form__title">Item Details</h2>

          <FormField
            label="Item Name"
            type="text"
            name="item_name"
            value={formValues.item_Name}
            onChange={handleInputChange}
            placeholder="Television"
            error={errors.item_Name}
          />

          <FormField
            label="Description"
            type="text"
            name="description"
            value={formValues.description}
            onChange={handleInputChange}
            placeholder="This 50, 4K LED TV provides a crystal-clear picture and vivid colors."
            error={errors.description}
            input="textarea"
          />
          <fieldset className="inventory-form__input-container">
            <label className="inventory-form__label" htmlFor="category">
              Category
            </label>
            <DropDown
              name="category"
              value={formValues.categories}
              handleInputChange={handleInputChange}
              errors={errors.categories}
            />
            {errors.categories && <ErrorText />}
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
                />
                <label className={`${outOfStockText}`} htmlFor="outOfStock">
                  Out of Stock
                </label>
              </div>
            </section>
            {errors.status && <ErrorText />}
          </fieldset>

          {formValues.status === INVENTORY_STOCK.IN_STOCK && (
            <FormField
              label="Quantity"
              type="number"
              name="quantity"
              value={formValues.quantity}
              onChange={handleInputChange}
              placeholder="0"
              error={errors.quantity}
              size="small"
            />
          )}

          <fieldset className="inventory-form__input-container">
            <label className="inventory-form__label" htmlFor="category">
              Warehouse
            </label>
            {/* need to add a list of warehouses , use to pass warehouse list to here*/}
            <DropDown
              name="warehouse_id"
              value={formValues.warehouse_id}
              handleInputChange={handleInputChange}
              errors={errors.warehouse_id}
            />
          </fieldset>
        </div>
      </section>
    </div>
  );
};

export default InventoryForm;
