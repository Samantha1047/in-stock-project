import sortIcon from "../../assets/icons/sort-24px.svg"

const TableHeader = ({ columns, type }) => {

    return (
        <div className="table-header">
            {columns.map((column, index) => (
                <div key={index} className="table-header__column">
                    <p className="table-header__item">{column}</p>
                    <img className="table-header__icon" src={sortIcon} alt="sort icon" />
                </div>
            ))}

        </div>
    )
}

export default TableHeader;