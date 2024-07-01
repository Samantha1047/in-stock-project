import "./ErrorText.scss";
import errorIcon from "../../assets/icons/error-24px.svg";

const ErrorText = () => {
  return (
    <div className="error-text">
      <img className="error-text__icon" src={errorIcon} alt="error icon" />
      <p className="error-text__body">This field is required</p>
    </div>
  );
};

export default ErrorText;
