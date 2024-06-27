import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import "./InventoryDetail.scss";

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

  const {
    id,
    warehouse_name,
    item_name,
    description,
    category,
    status,
    quantity,
  } = inventory;

  if (!inventory) {
    return <div>Loading...</div>;
  }

  const navigate = useNavigate();

  const handleBack = () => {
    //navigate back to home page
    navigate("/inventory");
  };

  const handleEdit = () => {
    //need to navigate to corresponding warehouse edit page, may need to update
    navigate(`/inventory/${itemId}/edit`);
  };

  return (
    <section className="inventory-detail">
      <div className="inventory-detail__header">
        <div className="inventory-detail__title-wrap">
          <button
            onClick={handleBack}
            className="inventory-detail__back-button"
            aria-label="Go back"
          ></button>
          <h1>{item_name}</h1>
        </div>
        <button
          onClick={handleEdit}
          className="inventory-detail__edit-button"
          aria-label="Edit inventory details"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="white"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M3 17.25V21H6.75L17.81 9.94L14.06 6.19L3 17.25ZM20.71 7.04C21.1 6.65 21.1 6.02 20.71 5.63L18.37 3.29C17.98 2.9 17.35 2.9 16.96 3.29L15.13 5.12L18.88 8.87L20.71 7.04V7.04Z" />
          </svg>
          <span>Edit</span>
        </button>
      </div>

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
