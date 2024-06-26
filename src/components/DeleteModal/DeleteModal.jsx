import "./DeleteModal.scss";
import Button from "../Button/Button";

const DeleteModal = ({ WarehouseName /* onclose, onConfirm */ }) => {
  return (
    <section className="modal">
      <div className="modal__container">
        <i className="modal__closeIcon" /*  onClick={onclose} */ />
        <div className="modal__content">
          <h1>Delete {WarehouseName} warehouse?</h1>
          <p>Please confirm that you’d like to delete the {WarehouseName} from the list of warehouses. You won’t be able to undo this action.</p>
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
