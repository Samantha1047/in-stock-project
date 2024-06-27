import ErrorText from "../ErrorText/ErrorText";
import chevronDown from "../../assets/icons/arrow_drop_down-24px.svg";

import "./DropDown.scss";
import { useState } from "react";
const DropDown = ({ name, handleInputChange, value, errors, categoryList }) => {
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };
  return (
    <div tabIndex="0" className={`drop-down ${isFocused ? "focused" : ""}`}>
      <select
        className="drop-down__input"
        value={value}
        onChange={handleInputChange}
        name={name}
      >
        {categoryList.map((category) => (
          <option key={category.id} value={category.id}>
            {category.name}
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
      {errors && <ErrorText />}
    </div>
  );
};
export default DropDown;
