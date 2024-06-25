import "./WarehouseEdit.scss";
import arrowBack from "../../assets/icons/arrow_back-24px.svg";

const WarehouseEdit = () => {
  return (
    <div>
      <section className="warehouse__header">
        <img src={arrowBack} />
        <h1>Edit Warehouse</h1>
      </section>
      <form className="warehouse__form">
        <section className="warehouse__details-section">
          <h2 className="warehouse__details-title">Warehouse Details</h2>
          <fieldset className="warehouse__input-container">
            <label className="warehouse__input-label" htmlFor="warehouseName">
              Warehouse Name
            </label>
            <input
              className="warehouse__input"
              type="text"
              id="warehouseName"
              placeholder="Washington"
              name="warehouseName"
            />
          </fieldset>
          <fieldset className="warehouse__input-container">
            <label className="warehouse__input-label" htmlFor="address">
              Street Address
            </label>
            <input
              className="warehouse__input"
              type="text"
              id="address"
              placeholder="33 Pearl Street SW"
              name="address"
            />
          </fieldset>
          <fieldset className="warehouse__input-container">
            <label className="warehouse__input-label" htmlFor="city">
              City
            </label>
            <input
              className="warehouse__input"
              type="text"
              id="city"
              placeholder="33 Pearl Street SW"
              name="city"
            />
          </fieldset>
          <fieldset className="warehouse__input-container">
            <label className="warehouse__input-label" htmlFor="city">
              Country
            </label>
            <input
              className="warehouse__input"
              type="text"
              id="country"
              placeholder="USA"
              name="country"
            />
          </fieldset>
        </section>
        <section className="warehouse-edit__contact-section">
          <h2>Contact Details</h2>
          <fieldset className="warehouse__input-container">
            <label className="warehouse__input-label" htmlFor="contact_name">
              contactName
            </label>
            <input
              type="text"
              className="warehouse__input"
              id="contact_name"
              placeholder="Graeme Lyon"
              name="contact_name"
            />
          </fieldset>
          <fieldset className="warehouse__input-container">
            <label
              className="warehouse__input-label"
              htmlFor="contact_position"
            >
              Position
            </label>
            <input
              className="warehouse__input"
              type="text"
              id="contact_position"
              placeholder="Graeme Lyon"
              name="contact_position"
            />
          </fieldset>
          <fieldset className="warehouse__input-container">
            <label className="warehouse__input-label" htmlFor="contact_phone">
              Phone Number
            </label>
            <input
              className="warehouse__input"
              type="tel"
              id="contact_phone"
              placeholder="Graeme Lyon"
              name="contact_phone"
            />
          </fieldset>
          <fieldset className="warehouse__input-container">
            <label className="warehouse__input-label" htmlFor="contact_email">
              Email
            </label>
            <input
              className="warehouse__input"
              type="email"
              id="contact_email"
              placeholder="Graeme Lyon"
              name="contact_email"
            />
          </fieldset>
        </section>
        <section className="warehouse-edit__warehouse-btn">
          <button>Cancel</button>
          <button>Save</button>
        </section>
      </form>
      {/* <Footer /> */}
    </div>
  );
};

export default WarehouseEdit;
