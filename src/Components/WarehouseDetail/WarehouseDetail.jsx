import "./WarehouseDetail.scss";

const WarehouseDetail = () => {
  return (
    <section className="warehouse-detail">
      <div className="warehouse-detail__header">
        <div className="warehouse-detail__title-wrap">
          <button className="warehouse-detail__back-button"></button>
          <h1>Washington</h1>
        </div>
        <button className="warehouse-detail__edit-button">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
            <path d="M3 17.25V21H6.75L17.81 9.94L14.06 6.19L3 17.25ZM20.71 7.04C21.1 6.65 21.1 6.02 20.71 5.63L18.37 3.29C17.98 2.9 17.35 2.9 16.96 3.29L15.13 5.12L18.88 8.87L20.71 7.04V7.04Z" />
          </svg>
          <span>Edit</span>
        </button>
      </div>

      <section className="warehouse-detail__details">
        <div className="warehouse-detail__details-address">
          <h4>WAREHOUSE ADDRESS:</h4>
          <p>33 Pearl Street SW, Washington, USA</p>
        </div>

        <div className="warehouse-detail__contact-info">
          <section className="warehouse-detail__contact-name">
            <h4>CONTACT NAME:</h4>
            <p>Graeme Lyon</p>
            <p>Warehouse Manager</p>
          </section>
          <section className="warehouse-detail__contact-phone">
            <h4>CONTACT INFORMATION:</h4>
            <p>+1 (647) 504-0911</p>
            <p>glyon@instock.com</p>
          </section>
        </div>
      </section>
    </section>
  );
};

export default WarehouseDetail;
