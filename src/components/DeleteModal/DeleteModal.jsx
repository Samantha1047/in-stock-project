import "./DeleteModal.scss";
import Button from "../Button/Button";

const DeleteModal = ({ isWarehouse, name /* onclose, onConfirm */ }) => {
  return (
    <section className="modal">
      <div className="modal__container">
        <i className="modal__closeIcon" /*  onClick={onclose} */ />
        <div className="modal__content">
          <h1>
            Delete {name} {isWarehouse ? "warehouse" : "inventory item"}?
          </h1>
          <p>
            Please confirm that you’d like to delete the {name} from {isWarehouse ? "the list of warehouses" : "the inventory list"}. You won’t be able to undo this action.
          </p>
        </div>

        <div className="modal__buttons">
          <Button text="Cancel" isPrimary={false} /*  onClick={onclose} */ />
          <button /* onClick={onConfirm} */ className="modal__delete-button">Delete</button>
        </div>
      </div>
    </section>
  );
};

export default DeleteModal;
