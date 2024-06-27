import ErrorText from "../ErrorText/ErrorText";
import chevronDown from "../../assets/icons/arrow_drop_down-24px.svg";
const categoryOptions = [
  "Electronics",
  "Accessories",
  "Gear",
  "Apparel",
  "Health",
];

//Need to grab warehouse names from the database, use this as a placeholder
const warehouseOptions = [
  { warehouse_name: "Manhattan", warehouse_id: 1 },
  { warehouse_name: "Washington", warehouse_id: 2 },
  { warehouse_name: "Jersey", warehouse_id: 3 },
];
import "./DropDown.scss";
import { useState } from "react";
const DropDown = ({ name, handleInputChange, value, errors }) => {
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };
  const dropdownOptions =
    name === "category" ? categoryOptions : warehouseOptions;
  return (
    <div tabIndex="0" className={`drop-down ${isFocused ? "focused" : ""}`}>
      <select
        className="drop-down__input"
        value={value}
        onChange={handleInputChange}
        name={name}
      >
        {dropdownOptions.map((option) => {
          const optionKey = name === "category" ? option : option.warehouse_id;
          const optionValue =
            name === "category" ? option : option.warehouse_name;

          return (
            <option key={optionKey} value={optionKey}>
              {optionValue}
            </option>
          );
        })}
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
