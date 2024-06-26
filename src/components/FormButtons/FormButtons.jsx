import Button from "../Button/Button";
import "./FormButtons.scss";

const FormButtons = ({ handleSubmit, pageType, page }) => {
  const buttonText =
    page === "warehouse"
      ? pageType === "add"
        ? "+ Add Warehouse"
        : "Save"
      : pageType === "add"
      ? "+ Add Item"
      : "Save";
  return (
    <section className="form-buttons">
      <Button location="form" text="Cancel" isPrimary={false} type="reset" />
      <Button
        location="form"
        text={buttonText}
        isPrimary={true}
        type="submit"
        handleSubmit={handleSubmit}
      />
    </section>
  );
};

export default FormButtons;
