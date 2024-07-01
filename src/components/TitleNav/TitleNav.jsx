import "./TitleNav.scss";
import { useNavigate } from "react-router-dom";
const TitleNav = ({ title, page }) => {
  const navigate = useNavigate();
  const titleText = title ? title : "Washington";
  const backUrl = page == "Warehouse" ? "/" : "/inventory";

  const handleBack = () => {
    navigate(backUrl);
  };

  return (
    <div className="title-nav__header">
      <div className="title-nav__title-wrap">
        <button
          className="title-nav__back-button"
          onClick={handleBack}
        ></button>
        <h1>{titleText}</h1>
      </div>
    </div>
  );
};

export default TitleNav;
