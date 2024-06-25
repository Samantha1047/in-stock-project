import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./WarehouseDetail.scss";

const WarehouseDetail = () => {
  const [warehouse, setWarehouse] = useState({
    id: 1,
    warehouse_name: "Manhattan",
    address: "503 Broadway",
    city: "New York",
    country: "USA",
    contact_name: "Parmin Aujla",
    contact_position: "Warehouse Manager",
    contact_phone: "+1 (646) 123-1234",
    contact_email: "paujla@instock.com",
  });

  const { warehouse_name, address, city, country, contact_name, contact_position, contact_phone, contact_email } = warehouse;

  useEffect(() => {
    //axios calls with id params, update later
  }, []);

  if (!warehouse) {
    return <div>Loading...</div>;
  }

  const navigate = useNavigate();

  const handleBack = () => {
    //navigate back to home page
    navigate("/");
  };

  const handleEdit = () => {
    //need to navigate to corresponding warehouse edit page, may need to update
    navigate(`/${warehouse.id}/edit`);
  };

  return (
    <section className="warehouse-detail">
      <div className="warehouse-detail__header">
        <div className="warehouse-detail__title-wrap">
          <button onClick={handleBack} className="warehouse-detail__back-button" aria-label="Go back"></button>
          <h1>{warehouse_name}</h1>
        </div>
        <button onClick={handleEdit} className="warehouse-detail__edit-button" aria-label="Edit warehouse details">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
            <path d="M3 17.25V21H6.75L17.81 9.94L14.06 6.19L3 17.25ZM20.71 7.04C21.1 6.65 21.1 6.02 20.71 5.63L18.37 3.29C17.98 2.9 17.35 2.9 16.96 3.29L15.13 5.12L18.88 8.87L20.71 7.04V7.04Z" />
          </svg>
          <span>Edit</span>
        </button>
      </div>

      <section className="warehouse-detail__details">
        <div className="warehouse-detail__details-address">
          <h4>WAREHOUSE ADDRESS:</h4>
          <p>
            {address}, {city}, {country}
          </p>
        </div>

        <div className="warehouse-detail__contact-info">
          <section className="warehouse-detail__contact-name">
            <h4>CONTACT NAME:</h4>
            <p>{contact_name}</p>
            <p>{contact_position}</p>
          </section>
          <section className="warehouse-detail__contact-phone">
            <h4>CONTACT INFORMATION:</h4>
            <p>{contact_phone}</p>
            <p>{contact_email}</p>
          </section>
        </div>
      </section>
    </section>
  );
};

export default WarehouseDetail;
