import "./DeleteModal.scss";
import Button from "../Button/Button";
import { useEffect } from "react";
import closeIcon from "../../assets/icons/close-24px.svg";

const DeleteModal = ({ isWarehouse, name, onClose, onConfirmDelete, isActive }) => {
  useEffect(() => {
    document.body.style.overflow = isActive ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isActive]);

  if (!isActive) return null;
  return (
    <section className="modal">
      <div className="modal__container">
        <Button icon={closeIcon} location={"DeleteModal"} handleEvent={() => onClose()} />
        <div className="modal__content">
          <h1>
            Delete {name} {isWarehouse ? "warehouse" : "inventory item"}?
          </h1>
          <p>
            Please confirm that you’d like to delete the {name} from {isWarehouse ? "the list of warehouses" : "the inventory list"}. You won’t be able to undo this action.
          </p>
        </div>

        <div className="modal__buttons">
          <Button handleEvent={() => onClose()} text={"Cancel"} isPrimary={false} />
          <button onClick={onConfirmDelete} className="modal__delete-button">
            Delete
          </button>
        </div>
      </div>
    </section>
  );
};

export default DeleteModal;
