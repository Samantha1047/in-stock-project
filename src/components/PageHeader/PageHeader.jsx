import "./PageHeader.scss";
import SearchBar from "../../components/SearchBar/SearchBar";
import { useNavigate } from "react-router-dom";

const PageHeader = ({ title, link, buttonTitle }) => {
  const navigate = useNavigate();

  return (
    <section className="page-header">
      <h1 className="page-header__title">{title}</h1>
      <div className="page-header__controls">
        <SearchBar />
        <button onClick={() => navigate(link)} className="page-header__button">
          {buttonTitle}
        </button>
      </div>
    </section>
  );
};

export default PageHeader;
