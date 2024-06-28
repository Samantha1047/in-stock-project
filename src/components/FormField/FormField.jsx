import "./FormField.scss";
import ErrorText from "../ErrorText/ErrorText";
const FormField = ({
  label,
  type,
  name,
  value,
  onChange,
  placeholder,
  error,
  input,
}) => {
  const inputType = input === "textarea" ? "form-field--textarea" : "";

  return (
    <fieldset className={`form-field__input-container `}>
      <label className="form-field__input-label" htmlFor={name}>
        {label}
      </label>
      <textarea
        type={type}
        className={`form-field__input ${
          error ? "error-border" : ""
        } ${inputType} `}
        id={name}
        placeholder={placeholder}
        name={name}
        onChange={onChange}
        value={value}
      />
      {error && <ErrorText />}
    </fieldset>
  );
};

export default FormField;
