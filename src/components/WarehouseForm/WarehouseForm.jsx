import "./WarehouseForm.scss";
const WarehouseForm = () => {
  return (
    <>
      <section className="warehouse-form__details-section">
        <h2 className="warehouse-form___details-title">Warehouse Details</h2>
        <fieldset className="warehouse-form__input-container">
          <label
            className="warehouse-form___input-label"
            htmlFor="warehouseName"
          >
            Warehouse Name
          </label>
          <input
            className="warehouse-form__input"
            type="text"
            id="warehouseName"
            placeholder="Washington"
            name="warehouseName"
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
          />
        </fieldset>
      </section>
      <section className="warehouse-form__contact-section">
        <h2>Contact Details</h2>
        <fieldset className="warehouse-form__input-container">
          <label className="warehouse-form__input-label" htmlFor="contact_name">
            contactName
          </label>
          <input
            type="text"
            className="warehouse-form__input"
            id="contact_name"
            placeholder="Graeme Lyon"
            name="contact_name"
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
          />
        </fieldset>
      </section>
    </>
  );
};

export default WarehouseForm;
