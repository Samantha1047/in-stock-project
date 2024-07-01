import "./TitleNav.scss";
import { useNavigate } from "react-router-dom";

const TitleNav = ({ title, page, edit, handleEdit }) => {

  const navigate = useNavigate();
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
        <h1>{title}</h1>
      </div>


      {edit && (
        <button className="title-nav__edit-button" onClick={handleEdit}>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="white"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M3 17.25V21H6.75L17.81 9.94L14.06 6.19L3 17.25ZM20.71 7.04C21.1 6.65 21.1 6.02 20.71 5.63L18.37 3.29C17.98 2.9 17.35 2.9 16.96 3.29L15.13 5.12L18.88 8.87L20.71 7.04V7.04Z" />
          </svg>
          <span>Edit</span>
        </button>
      )}

    </div>
  );
};

export default TitleNav;
