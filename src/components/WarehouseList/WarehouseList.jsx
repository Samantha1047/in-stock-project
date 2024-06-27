import { Link, useNavigate } from 'react-router-dom'
import editIcon from '../../assets/icons/edit-24px.svg'
import chevRight from '../../assets/icons/chevron_right-24px.svg'
import deleteIcon from '../../assets/icons/delete_outline-24px.svg'
import sortIcon from '../../assets/icons/sort-24px.svg'
import './WarehouseList.scss'

const WarehouseList = ({ warehouseList }) => {
    const navigate = useNavigate()

    const tableHeaders = [
        'WAREHOUSE',
        'ADDRESS',
        'CONTACT NAME',
        'CONTACT INFORMATION',
        'ACTIONS'
    ]

    return (
        <section className='warehouse-list'>
            <div className='warehouse-list__table'>
                <div className='warehouse-list__table-headers warehouse-list__table-headers--hidden'>
                    {tableHeaders.map((header, index) => (
                        <div key={index} className='warehouse-list__header-column'>
                            <p>{header}</p>
                            <img
                                className='warehouse-list__sort-icon'
                                src={sortIcon}
                                alt='sort icon'
                            />
                        </div>
                    ))}
                </div>
                <div>
                    {warehouseList.map(item => {
                        const {
                            warehouseId,
                            warehouse_name,
                            address,
                            city,
                            country,
                            contact_name,
                            contact_phone,
                            contact_email
                        } = item
                        return (
                            <article key={warehouseId} className='warehouse-list__table-row'>
                                <div className='warehouse-list__information'>
                                    <div className='warehouse-list__table-cell--left'>
                                        <div className='warehouse-list__table-cell warehouse-list__table-cell--tablet'>
                                            <p className='warehouse-list__header--mobile'>
                                                WAREHOUSE
                                            </p>
                                            <Link
                                                to={`${warehouseId}`}
                                                className='warehouse-list__link'
                                            >
                                                <p> {warehouse_name}</p>
                                                <img
                                                    className='warehouse-list__chevron'
                                                    src={chevRight}
                                                    alt='chevron right icon'
                                                />
                                            </Link>
                                        </div>
                                        <div className='warehouse-list__table-cell'>
                                            <p className='warehouse-list__header--mobile'>ADDRESS</p>
                                            <p className='warehouse-list__item'>
                                                {address}, {city}, {country}
                                            </p>
                                        </div>
                                    </div>
                                    <div className='warehouse-list__table-cell--right'>
                                        <div className='warehouse-list__table-cell'>
                                            <p className='warehouse-list__header--mobile'>
                                                CONTACT NAME
                                            </p>
                                            <p className='warehouse-list__item'>{contact_name}</p>
                                        </div>
                                        <div className='warehouse-list__table-cell'>
                                            <p className='warehouse-list__header--mobile'>
                                                CONTACT INFORMATION
                                            </p>
                                            <p className='warehouse-list__item'>{contact_phone}</p>
                                            <p className='warehouse-list__item'>{contact_email}</p>
                                        </div>
                                    </div>
                                </div>

                                <div className='warehouse-list__table-cell--bottom'>
                                    <button className='warehouse-list__delete-button'>
                                        <img
                                            onClick={() => navigate(`/${warehouseId}/delete`)}
                                            src={deleteIcon}
                                            alt='Delete'
                                        />
                                    </button>
                                    <button
                                        onClick={() => navigate(`/${warehouseId}/edit`)}
                                        className='warehouse-list__edit-button'
                                    >
                                        <img src={editIcon} alt='Edit' />
                                    </button>
                                </div>
                            </article>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}

export default WarehouseList
