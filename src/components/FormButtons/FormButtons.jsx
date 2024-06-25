import Button from "../Button/Button";
import "./FormButtons.scss";

const FormButtons = () => {
  return (
    <section className="form-buttons">
      <Button text="Cancel" isPrimary={false} />
      <Button text="Save" isPrimary={true} />
    </section>
  );
};

export default FormButtons;
