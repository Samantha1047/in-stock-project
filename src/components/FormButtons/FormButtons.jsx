import Button from "../Button/Button";
import "./FormButtons.scss";

const FormButtons = () => {
  return (
    <section className="form-buttons">
      <Button location="form" text="Cancel" isPrimary={false} />
      <Button location="form" text="Save" isPrimary={true} />
    </section>
  );
};

export default FormButtons;
