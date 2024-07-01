import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import "./WarehouseDetail.scss";
import TitleNav from "../TitleNav/TitleNav";

const API_URL = import.meta.env.VITE_APP_API_URL;

const WarehouseDetail = () => {
  const [warehouse, setWarehouse] = useState({});
  const { warehouseId } = useParams();
  const navigate = useNavigate();
  const {
    warehouse_name,
    address,
    city,
    country,
    contact_name,
    contact_position,
    contact_phone,
    contact_email,
  } = warehouse;

  useEffect(() => {
    axios
      .get(`${API_URL}/api/warehouses/${warehouseId}`)
      .then((response) => {
        setWarehouse(response.data[0]);
      })

      .catch((err) => {
        console.error("Cannot fetch warehouse", err.message);
      });
  }, [warehouseId]);

  if (!warehouse) {
    return <div>Loading...</div>;
  }

  const handleEdit = () => {
    navigate(`/${warehouseId}/edit`);
  };

  return (
    <section className="warehouse-detail">
      <TitleNav
        title={warehouse_name}
        edit={true}
        page="Warehouse"
        handleEdit={handleEdit}
      />

      <section className="warehouse-detail__details warehouse-detail__details--mobile">
        <div className="warehouse-detail__details-address">
          <h4 className="warehouse-detail__subtitle">WAREHOUSE ADDRESS:</h4>
          <p className="warehouse-detail__address">
            {address}, {city}, {country}
          </p>
        </div>

        <div className="warehouse-detail__contact-info">
          <section className="warehouse-detail__contact-name">
            <h4 className="warehouse-detail__subtitle">CONTACT NAME:</h4>
            <p>{contact_name}</p>
            <p>{contact_position}</p>
          </section>
          <section className="warehouse-detail__contact-phone">
            <h4 className="warehouse-detail__subtitle">CONTACT INFORMATION:</h4>
            <p>{contact_phone}</p>
            <p>{contact_email}</p>
          </section>
        </div>
      </section>
    </section>
  );
};

export default WarehouseDetail;
