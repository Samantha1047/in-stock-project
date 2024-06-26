import "./ErrorText.scss";
import errorIcon from "../../assets/icons/error-24px.svg";

const ErrorText = ({ isDisplayed }) => {
  const text = !isDisplayed ? "This field is required" : "";
  return (
    <div className={`error-text ${!isDisplayed ? "error-text--hidden" : ""} `}>
      <img className="error-text__icon" src={errorIcon} alt="error icon" />
      <p className="error-text__body">{text}</p>
    </div>
  );
};

export default ErrorText;
