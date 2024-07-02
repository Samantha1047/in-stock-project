import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import "./InventoryDetail.scss";
import TitleNav from "../TitleNav/TitleNav";

const API_URL = import.meta.env.VITE_APP_API_URL;

const InventoryDetail = () => {
  const [inventory, setInventory] = useState({});
  const { itemId } = useParams();

  useEffect(() => {
    axios
      .get(`${API_URL}/api/inventories/${itemId}`)
      .then((response) => {
        setInventory(response.data[0]);
      })
      .catch((err) => {
        console.error("Cannot fetch inventory", err.message);
      });
  }, [itemId]);

  const { warehouse_name, item_name, description, category, status, quantity } =
    inventory;
  const navigate = useNavigate();

  if (!inventory) {
    return <div>Loading...</div>;
  }

  const handleEdit = () => {
    navigate(`/inventory/${itemId}/edit`);
  };

  return (
    <section className="inventory-detail">
      <TitleNav
        title={item_name}
        edit={true}
        page="Inventory"
        handleEdit={handleEdit}
      />

      <section className="inventory-detail__details">
        <div className="inventory-detail__details-info">
          <section className="inventory-detail__description">
            <h4>ITEM DESCRIPTION:</h4>
            <p>{description}</p>
          </section>
          <section className="inventory-detail__category">
            <h4>CATEGORY:</h4>
            <p>{category}</p>
          </section>
        </div>

        <div className="inventory-detail__stock-info">
          <div className="flex-container">
            <section
              className={`inventory-detail_status ${
                status === "In Stock"
                  ? "inventory-detail__status--green"
                  : "inventory-detail__status--red"
              }`}
            >
              <h4>STATUS:</h4>
              <span>{status ? status.toUpperCase() : null}</span>
            </section>
            <section className="inventory-detail__warehouse">
              <h4>WAREHOUSE:</h4>
              <p>{warehouse_name}</p>
            </section>
          </div>
          <section className="inventory-detail__quantity">
            <h4>QUANTITY:</h4>
            <p>{quantity}</p>
          </section>
        </div>
      </section>
    </section>
  );
};

export default InventoryDetail;
