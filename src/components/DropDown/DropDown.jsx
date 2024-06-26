import chevronDown from "../../assets/icons/arrow_drop_down-24px.svg";
const categories = ["Electronics", "Accessories", "Gear", "Apparel", "Health"];
import "./DropDown.scss";
import { useState } from "react";
const DropDown = ({ name }) => {
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };
  const options = name === "category" ? categories : [];
  return (
    <div tabIndex="0" className={`drop-down ${isFocused ? "focused" : ""}`}>
      <select className="drop-down__input" value={name}>
        {options.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>
      <img
        className="drop-down__icon"
        src={chevronDown}
        alt="Drop down button"
        onFocus={handleFocus}
        onBlur={handleBlur}
      />
    </div>
  );
};
export default DropDown;
