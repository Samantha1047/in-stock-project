import "./ErrorText.scss";
import errorIcon from "../../assets/icons/error-24px.svg";


const ErrorText = ({ text }) => {
  const errorText = text ? text : "This field is required";
  return (
    <div className={`error-text `}>
      <img className="error-text__icon" src={errorIcon} alt="error icon" />
      <p className="error-text__body">{errorText}</p>

    </div>
  );
};

export default ErrorText;
