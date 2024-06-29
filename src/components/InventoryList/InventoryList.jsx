import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import editIcon from "../../assets/icons/edit-24px.svg";
import chevRight from "../../assets/icons/chevron_right-24px.svg";
import deleteIcon from "../../assets/icons/delete_outline-24px.svg";
import sortIcon from "../../assets/icons/sort-24px.svg";
import DeleteModal from "../DeleteModal/DeleteModal";
import "./InventoryList.scss";

const InventoryList = ({ showWarehouse, inventoryList, onDeleteItem }) => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [currentInventory, setCurrentInventory] = useState("");
  const [currentInventoryId, setCurrentInventoryId] = useState("");
  const navigate = useNavigate();

  const handleClick = (name, id) => {
    setModalOpen(true);
    setCurrentInventory(name);
    setCurrentInventoryId(id);
  };

  const handleDelete = async (currentInventoryId) => {
    onDeleteItem(currentInventoryId);
    setModalOpen(false);
  };

  const tableHeaders = [
    "INVENTORY NAME",
    "CATEGORY",
    "STATUS",
    "QTY",
    showWarehouse ? "WAREHOUSE" : null,
    "ACTIONS",
  ].filter(Boolean);

  if (!inventoryList) {
    return <div>Loading</div>;
  }

  return (
    <section className="inventory-list">
      <div className="inventory-list__table">
        <div className="inventory-list__table-headers inventory-list__table-headers--hidden">
          {tableHeaders.map((header) => (
            <div key={header} className="inventory-list__header-column">
              <p>{header}</p>
              <img
                className="inventory-list__sort-icon"
                src={sortIcon}
                alt="sort icon"
              />
            </div>
          ))}
        </div>
        <div>
          {inventoryList.map((item) => {
            const {
              itemId,
              warehouse_name,
              item_name,
              category,
              status,
              quantity,
            } = item;

            return (
              <article
                key={`${itemId}-${item_name}`}
                className="inventory-list__table-row"
              >
                <div className="inventory-list__information">
                  <div className="inventory-list__table-cell--left">
                    <div className="inventory-list__table-cell inventory-list__table-cell--tablet">
                      <p className="inventory-list__header--mobile">
                        INVENTORY ITEM
                      </p>
                      <Link
                        to={`/inventory/${itemId}`}
                        className="inventory-list__link"
                      >
                        <p> {item_name}</p>
                        <img
                          className="inventory-list__chevron"
                          src={chevRight}
                          alt="chevron right icon"
                        />
                      </Link>
                    </div>
                    <div className="inventory-list__table-cell">
                      <p className="inventory-list__header--mobile">CATEGORY</p>
                      <p className="inventory-list__item">{category}</p>
                    </div>
                  </div>
                  <div className="inventory-list__table-cell--right">
                    <div className="inventory-list__table-cell">
                      <p className="inventory-list__header--mobile">STATUS</p>
                      <p
                        className={`inventory-list__item inventory-list__item--status ${
                          status === "In Stock"
                            ? "inventory-list__item--green"
                            : "inventory-list__item--red"
                        }`}
                      >
                        {status}
                      </p>
                    </div>
                    <div className="inventory-list__table-cell">
                      <p className="inventory-list__header--mobile">QTY</p>
                      <p className="inventory-list__item">{quantity}</p>
                    </div>
                    {showWarehouse && (
                      <div className="inventory-list__table-cell">
                        <p className="inventory-list__header--mobile">
                          WAREHOUSE
                        </p>
                        <p className="inventory-list__item">{warehouse_name}</p>
                      </div>
                    )}
                  </div>
                </div>

                <div className="inventory-list__table-cell--bottom">
                  {/* // may need to adjust when delete modal is completed  */}
                  <button
                    className="inventory-list__delete-button"
                    onClick={() => handleClick(item_name, itemId)}
                  >
                    <img src={deleteIcon} alt="Delete" />
                  </button>
                  <button
                    onClick={() => navigate(`/inventory/${itemId}/edit`)}
                    className="inventory-list__edit-button"
                  >
                    <img src={editIcon} alt="Edit" />
                  </button>
                </div>
              </article>
            );
          })}
        </div>
      </div>
      <DeleteModal
        isWarehouse={false}
        name={currentInventory}
        onClose={() => setModalOpen(false)}
        onConfirmDelete={() => handleDelete(currentInventoryId)}
        isActive={isModalOpen}
      />
    </section>
  );
};

export default InventoryList;
