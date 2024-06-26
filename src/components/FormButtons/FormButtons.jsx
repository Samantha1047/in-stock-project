import Button from "../Button/Button";
import "./FormButtons.scss";


const FormButtons = ({ handleSubmit }) => {
  return (
    <section className="form-buttons">
      <Button location="form" text="Cancel" isPrimary={false} type="reset" />
      <Button
        location="form"
        text="Save"
        isPrimary={true}
        type="submit"
        handleSubmit={handleSubmit}
      />

    </section>
  );
};

export default FormButtons;
