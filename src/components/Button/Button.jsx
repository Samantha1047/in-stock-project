import "./Button.scss";

const Button = ({ text, icon, isPrimary, type }) => {
  const isPrimaryClass = isPrimary ? "button--primary" : "button--secondary";
  const isPrimaryText = isPrimary
    ? "button--primary-text"
    : "button--secondary-text";

  //Might need to be adjusted if we include edit button
  return (
    <button type={type} className={`button ${isPrimaryClass}`}>
      <div className="button__icon-container">
        <img className="button__icon" alt={icon} src={icon} />
      </div>
      <p className={`button__text ${isPrimaryText}`}>{text}</p>
    </button>
  );
};

export default Button;
