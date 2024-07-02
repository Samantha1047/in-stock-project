import Button from "../Button/Button";
import "./FormButtons.scss";

const FormButtons = ({ handleSubmit, mode, page, handleBack }) => {
  const buttonTextMap = {
    "add-inventory": "+ Add Item",
    "add-warehouse": "+ Add Warehouse",
    edit: "Save",
  };

  const key = mode === "add" ? `add-${page}` : mode;

  const buttonText = buttonTextMap[key] || "Save";

  return (
    <section className="form-buttons">
      <Button
        location="form"
        text="Cancel"
        isPrimary={false}
        handleEvent={handleBack}
      />
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
