import "./WarehouseForm.scss";
import { useState } from "react";

// const initialformValues = {
//   warehouse_name: "",
//   address: "",
//   city: "",
//   country: "",
//   contact_name: "",
//   contact_position: "",
//   contact_phone: "",
//   contact_email: "",
// };

const WarehouseForm = ({ formValues, handleInputChange }) => {
  // const [formValues, setformValues] = useState(initialformValues);

  // const handleInputChange = (e) => {
  //   const { name, value } = e.target;
  //   setformValues({
  //     ...formValues,
  //     [name]: value,
  //   });
  // };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   // Assuming `formValues` is the state in WarehouseForm holding the form formValues
  //   onWarehouseFormSubmit(formValues);
  // };

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
              className="warehouse-form__input"
              type="text"
              id="warehouseName"
              placeholder="Washington"
              name="warehouse_name"
              onChange={handleInputChange}
              value={formValues.warehouse_name}
            />
          </fieldset>
          <fieldset className="warehouse-form__input-container">
            <label className="warehouse-form__input-label" htmlFor="address">
              Street Address
            </label>
            <input
              className="warehouse-form__input"
              type="text"
              id="address"
              placeholder="33 Pearl Street SW"
              name="address"
              onChange={handleInputChange}
              value={formValues.address}
            />
          </fieldset>
          <fieldset className="warehouse-form__input-container">
            <label className="warehouse-form__input-label" htmlFor="city">
              City
            </label>
            <input
              className="warehouse-form__input"
              type="text"
              id="city"
              placeholder="33 Pearl Street SW"
              name="city"
              onChange={handleInputChange}
              value={formValues.city}
            />
          </fieldset>
          <fieldset className="warehouse-form__input-container">
            <label className="warehouse-form__input-label" htmlFor="city">
              Country
            </label>
            <input
              className="warehouse-form__input"
              type="text"
              id="country"
              placeholder="USA"
              name="country"
              onChange={handleInputChange}
              value={formValues.country}
            />
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
              className="warehouse-form__input"
              id="contact_name"
              placeholder="Graeme Lyon"
              name="contact_name"
              onChange={handleInputChange}
              value={formValues.contact_name}
            />
          </fieldset>
          <fieldset className="warehouse-form__input-container">
            <label
              className="warehouse-form__input-label"
              htmlFor="contact_position"
            >
              Position
            </label>
            <input
              className="warehouse-form__input"
              type="text"
              id="contact_position"
              placeholder="Graeme Lyon"
              name="contact_position"
              onChange={handleInputChange}
              value={formValues.contact_position}
            />
          </fieldset>
          <fieldset className="warehouse-form__input-container">
            <label
              className="warehouse-form__input-label"
              htmlFor="contact_phone"
            >
              Phone Number
            </label>
            <input
              className="warehouse-form__input"
              type="tel"
              id="contact_phone"
              placeholder="Graeme Lyon"
              name="contact_phone"
              onChange={handleInputChange}
              value={formValues.contact_phone}
            />
          </fieldset>
          <fieldset className="warehouse-form__input-container">
            <label
              className="warehouse-form__input-label"
              htmlFor="contact_email"
            >
              Email
            </label>
            <input
              className="warehouse-form__input"
              type="email"
              id="contact_email"
              placeholder="Graeme Lyon"
              name="contact_email"
              value={formValues.contact_email}
              onChange={handleInputChange}
            />
          </fieldset>
        </div>
      </section>
    </div>
  );
};

export default WarehouseForm;
