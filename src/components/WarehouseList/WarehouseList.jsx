
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import editIcon from "../../assets/icons/edit-24px.svg";
import chevRight from "../../assets/icons/chevron_right-24px.svg";
import deleteIcon from "../../assets/icons/delete_outline-24px.svg";
import sortIcon from "../../assets/icons/sort-24px.svg";
import DeleteModal from "../DeleteModal/DeleteModal";
import "./WarehouseList.scss";


const WarehouseList = ({ warehouses, handleWarehouseDelete }) => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [currentWarehouse, setCurrentWarehouse] = useState("");
  const [currentid, setCurrentid] = useState("");

  const navigate = useNavigate();

  const handleClick = (name, id) => {
    setModalOpen(true);
    setCurrentWarehouse(name);
    setCurrentid(id);
  };

  const handleDelete = async () => {
    handleWarehouseDelete(currentid);
    setModalOpen(false);
  };

  return (
    <section className="warehouse-list">
      <div className="warehouse-list__table">
        <div className="warehouse-list__table-headers warehouse-list__table-headers--hidden">
          <div className="warehouse-list__header-column">
            <p>Warehouse</p>
            <img
              className="warehouse-list__sort-icon"
              src={sortIcon}
              alt="sort icon"
            />
          </div>
          <div className="warehouse-list__header-column">
            <p>Address</p>
            <img
              className="warehouse-list__sort-icon"
              src={sortIcon}
              alt="sort icon"
            />
          </div>
          <div className="warehouse-list__header-column">
            <p>ContactName</p>

            <img
              className="warehouse-list__sort-icon"
              src={sortIcon}
              alt="sort icon"
            />
          </div>
          <div className="warehouse-list__header-column warehouse-list__header-column--contact">
            <p>Contact Information</p>
            <img
              className="warehouse-list__sort-icon"
              src={sortIcon}
              alt="sort icon"
            />
          </div>
          <div className="warehouse-list__header-column warehouse-list__header-column--actions">
            <p>Actions</p>
            <img
              className="warehouse-list__sort-icon"
              src={sortIcon}
              alt="sort icon"
            />
          </div>
        </div>
        <div>
          {warehouses.map((item) => {
            const {
              id,
              warehouse_name,
              address,
              city,
              country,
              contact_name,
              contact_phone,

              contact_email
            } = item

            return (
              <article key={`${id}-${warehouse_name}`} className='warehouse-list__table-row'>
                <div className='warehouse-list__information'>
                  <div className='warehouse-list__table-cell--left'>
                    <div className='warehouse-list__table-cell warehouse-list__table-cell--tablet'>
                      <p className='warehouse-list__header--mobile'>
                        WAREHOUSE
                      </p>
                      <Link to={`${id}`} className="warehouse-list__link">
                        <p> {warehouse_name}</p>
                        <img
                          className="warehouse-list__chevron"
                          src={chevRight}
                          alt="chevron right icon"
                        />
                      </Link>
                    </div>
                    <div className="warehouse-list__table-cell">
                      <p className="warehouse-list__header--mobile">ADDRESS</p>
                      <p className="warehouse-list__item">
                        {address}, {city}, {country}
                      </p>
                    </div>
                  </div>
                  <div className="warehouse-list__table-cell--right">
                    <div className="warehouse-list__table-cell">
                      <p className="warehouse-list__header--mobile">
                        CONTACT NAME
                      </p>
                      <p className="warehouse-list__item">{contact_name}</p>
                    </div>

                    <div className='warehouse-list__table-cell warehouse-list__table-cell--contact'>
                      <p className='warehouse-list__header--mobile'>

                        CONTACT INFORMATION
                      </p>
                      <p className="warehouse-list__item">{contact_phone}</p>
                      <p className="warehouse-list__item">{contact_email}</p>
                    </div>
                  </div>
                </div>
                <div className="warehouse-list__table-cell--bottom">
                  <button
                    className="warehouse-list__delete-button"
                    onClick={() => handleClick(warehouse_name, id)}
                  >
                    <img src={deleteIcon} alt="Delete" />
                  </button>
                  <button
                    onClick={() => navigate(`/${id}/edit`)}
                    className="warehouse-list__edit-button"
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
        isWarehouse={true}
        name={currentWarehouse}
        onClose={() => setModalOpen(false)}
        onConfirmDelete={() => handleDelete(currentid)}
        isActive={isModalOpen}
      />
    </section>
  );
};

export default WarehouseList;
