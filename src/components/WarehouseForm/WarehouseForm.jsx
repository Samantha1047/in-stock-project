import "./WarehouseForm.scss";
import ErrorText from "../ErrorText/ErrorText";
import InputMask from "react-input-mask";
const WarehouseForm = ({ formValues, handleInputChange, errors }) => {
  return (
    <div className="warehouse-form">
      <section className="warehouse-form__details-section">
        <div className="wrapper">
          <h2 className="warehouse-form__title">Warehouse Details</h2>
          <fieldset className="warehouse-form__input-container">
            <label
              className="warehouse-form__input-label"
              htmlFor="warehouseName"
            >
              Warehouse Name
            </label>
            <input
              className={`warehouse-form__input ${
                errors.warehouse_name ? "error-border" : ""
              }`}
              type="text"
              id="warehouseName"
              placeholder="Washington"
              name="warehouse_name"
              onChange={handleInputChange}
              value={formValues.warehouse_name}
            />
            {errors.warehouse_name && <ErrorText />}
          </fieldset>
          <fieldset className="warehouse-form__input-container">
            <label className="warehouse-form__input-label" htmlFor="address">
              Street Address
            </label>
            <input
              className={`warehouse-form__input ${
                errors.address ? "error-border" : ""
              }`}
              type="text"
              id="address"
              placeholder="33 Pearl Street SW"
              name="address"
              onChange={handleInputChange}
              value={formValues.address}
            />
            {errors.address && <ErrorText />}
          </fieldset>
          <fieldset className="warehouse-form__input-container">
            <label className="warehouse-form__input-label" htmlFor="city">
              City
            </label>
            <input
              className={`warehouse-form__input ${
                errors.city ? "error-border" : ""
              }`}
              type="text"
              id="city"
              placeholder="Washington"
              name="city"
              onChange={handleInputChange}
              value={formValues.city}
            />
            {errors.city && <ErrorText />}
          </fieldset>
          <fieldset className="warehouse-form__input-container">
            <label className="warehouse-form__input-label" htmlFor="city">
              Country
            </label>
            <input
              className={`warehouse-form__input ${
                errors.country ? "error-border" : ""
              }`}
              type="text"
              id="country"
              placeholder="USA"
              name="country"
              onChange={handleInputChange}
              value={formValues.country}
            />
            {errors.country && <ErrorText />}
          </fieldset>
        </div>
      </section>
      <section className="warehouse-form__contact-section">
        <div className="wrapper">
          <h2 className="warehouse-form__title">Contact Details</h2>
          <fieldset className="warehouse-form__input-container">
            <label
              className="warehouse-form__input-label"
              htmlFor="contact_name"
            >
              Contact Name
            </label>
            <input
              type="text"
              className={`warehouse-form__input ${
                errors.contact_name ? "error-border" : ""
              }`}
              id="contact_name"
              placeholder="Graeme Lyon"
              name="contact_name"
              onChange={handleInputChange}
              value={formValues.contact_name}
            />
            {errors.contact_name && <ErrorText />}
          </fieldset>
          <fieldset className="warehouse-form__input-container">
            <label
              className="warehouse-form__input-label"
              htmlFor="contact_position"
            >
              Position
            </label>
            <input
              className={`warehouse-form__input ${
                errors.contact_position ? "error-border" : ""
              }`}
              type="text"
              id="contact_position"
              placeholder="Warehouse Manager"
              name="contact_position"
              onChange={handleInputChange}
              value={formValues.contact_position}
            />
            {errors.contact_position && <ErrorText />}
          </fieldset>
          <fieldset className="warehouse-form__input-container">
            <label
              className="warehouse-form__input-label"
              htmlFor="contact_phone"
            >
              Phone Number
            </label>

            <input
              className={`warehouse-form__input ${
                errors.contact_phone ? "error-border" : ""
              }`}
              type="tel"
              id="contact_phone"
              placeholder="+1 (647) 504-0911"
              name="contact_phone"
              value={formValues.contact_phone}
              onChange={handleInputChange}
            />

            {errors.contact_phone && <ErrorText />}
          </fieldset>
          <fieldset className="warehouse-form__input-container">
            <label
              className="warehouse-form__input-label"
              htmlFor="contact_email"
            >
              Email
            </label>
            <input
              className={`warehouse-form__input ${
                errors.contact_email ? "error-border" : ""
              }`}
              type="email"
              id="contact_email"
              placeholder="glyon@instock.com"
              name="contact_email"
              value={formValues.contact_email}
              onChange={handleInputChange}
            />
            {errors.contact_email && <ErrorText />}
          </fieldset>
        </div>
      </section>
    </div>
  );
};

export default WarehouseForm;
