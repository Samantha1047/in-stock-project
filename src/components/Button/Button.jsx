import "./Button.scss";

const Button = ({ text, icon, isPrimary, type, location, handleEvent }) => {
  const isPrimaryClass = isPrimary ? "button--primary" : "button--secondary";

  const buttonLocation =
    location === "form" ? "button--form" : "button--default";

  return (
    <button
      type={type}
      className={`button ${isPrimaryClass} ${buttonLocation}`}
      onClick={handleEvent}
    >
      <div className="button__icon-container">
        <img className="button__icon" alt={icon} src={icon} />
      </div>
      <p className={`button__text`}>{text}</p>
    </button>
  );
};

export default Button;
