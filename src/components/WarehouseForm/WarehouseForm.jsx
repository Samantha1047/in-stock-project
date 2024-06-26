import "./WarehouseForm.scss";
import FormField from "../FormField/FormField";


const WarehouseForm = ({ formValues, handleInputChange, errors }) => {
  return (
    <div className="warehouse-form">
      <section className="warehouse-form__details-section">
        <div className="wrapper">
          <h2 className="warehouse-form__title">Warehouse Details</h2>
          <FormField
            label="Warehouse Name"
            type="text"
            name="warehouse_name"
            value={formValues.warehouse_name}
            onChange={handleInputChange}
            placeholder="Washington"
            error={errors.warehouse_name}
          />

          <FormField
            label="Street Address"
            type="text"
            name="address"
            value={formValues.address}
            onChange={handleInputChange}
            placeholder="33 Pearl Street SW"
            error={errors.address}
          />

          <FormField
            label="City"
            type="text"
            name="city"
            value={formValues.city}
            onChange={handleInputChange}
            placeholder="Washington"
            error={errors.city}
          />

          <FormField
            label="Country"
            type="text"
            name="country"
            value={formValues.country}
            onChange={handleInputChange}
            placeholder="USA"
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
            placeholder="Graeme Lyon"
            error={errors.contact_name}
          />

          <FormField
            label="Position"
            type="text"
            name="contact_position"
            value={formValues.contact_position}
            onChange={handleInputChange}
            placeholder="Warehouse Manager"
            error={errors.contact_position}
          />

          <FormField
            label="Phone Number"
            type="tel"
            name="contact_phone"
            value={formValues.contact_phone}
            onChange={handleInputChange}
            placeholder="+1 (647) 504-0911"
            error={errors.contact_phone}
          />

          <FormField
            label="Email"
            type="email"
            name="contact_email"
            value={formValues.contact_email}
            onChange={handleInputChange}
            placeholder="glyon@instock.com"
            error={errors.contact_email}

        </div>
      </section>
    </div>
  );
};

export default WarehouseForm;
