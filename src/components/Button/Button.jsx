import "./Button.scss";

const Button = ({ text, icon, isPrimary, type, location, handleEvent }) => {
  const isPrimaryClass = isPrimary ? "button--primary" : "button--secondary";
  const buttonLocation = location ? `button__icon--${location}` : "";
  const buttonClass = icon
    ? `button__icon ${buttonLocation}`
    : `button ${isPrimaryClass} ${buttonLocation}`;

  return (
    <button type={type} className={buttonClass} onClick={handleEvent}>
      {icon && (
        <div className="button__icon-container">
          <img className="button__icon-img" alt={icon} src={icon} />
        </div>
      )}
      {!icon && <p className="button__text">{text}</p>}
    </button>
  );
};

export default Button;
