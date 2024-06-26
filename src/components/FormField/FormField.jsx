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
}) => (
  <fieldset className="form-field__input-container">
    <label className="form-field__input-label" htmlFor={name}>
      {label}
    </label>
    <input
      type={type}
      className={`form-field__input ${error ? "error-border" : ""}`}
      id={name}
      placeholder={placeholder}
      name={name}
      onChange={onChange}
      value={value}
    />
    {error && <ErrorText />}
  </fieldset>
);

export default FormField;
