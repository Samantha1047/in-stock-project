import axios from 'axios';
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import editIcon from '../../assets/icons/edit-24px.svg'
import chevRight from '../../assets/icons/chevron_right-24px.svg'
import deleteIcon from '../../assets/icons/delete_outline-24px.svg'
import searchIcon from '../../assets/icons/search-24px.svg'
import './WarehouseList.scss'

const API_URL = import.meta.env.VITE_APP_API_URL;
console.log('API URL:', API_URL);

const WarehouseList = ({ setCurrentWarehouse }) => {
    const [warehouseList, setWarehouseList] = useState([]);

    useEffect(() => {
        const fetchWarehouses = async () => {
            try {
                const response = await axios.get(`${API_URL}/api/warehouses`);
                console.log('API response:', response);
                setWarehouseList(response.data);
            } catch (error) {
                console.error('Error fetching warehouse data: ', error)
            }
        };
        fetchWarehouses();
    }, []);

    const tableHeaders = ['WAREHOUSE', 'ADDRESS', 'CONTACT NAME', 'CONTACT INFORMATION', 'ACTIONS']

    return (
        <section className='warehouse-list'>
            <div className='warehouse-list__header'>
                <h1 className='warehouse-list__title'>Warehouses</h1>
                <input type='text' placeholder='Search...' className='warehouse-list__search' />
                <button className='warehouse-list__button'>+ Add New Warehouse</button>
            </div>
            <div className='warehouse-list__table'>
                <div className='warehouse-list__table-headers warehouse-list__table-headers--hidden'>
                    {tableHeaders.map((header, index) => (
                        <div key={index} className='warehouse-list__header-column'>
                            <p>{header}</p>
                        </div>
                    ))}
                </div>
                <div className='warehouse-list__table-body'>
                    {warehouseList.map((item) => {
                        const { id, warehouse_name, address, city, country, contact_name, contact_phone, contact_email } = item;
                        return (
                            <article key={id} className='warehouse-list__table-row' onClick={() => setCurrentWarehouse(item)}>
                                <div className='warehouse-list__information'>
                                    <div className='warehouse-list__cell--left'>
                                        <div className='warehouse-list__table-cell'>
                                            <p className='warehouse-list__header--mobile'>WAREHOUSE</p>
                                            <Link to={`/warehouse/${id}`} className='warehouse-list__link'>
                                                {warehouse_name}
                                            </Link>
                                        </div>
                                        <div className='warehouse-list__table-cell'>
                                            <p className='warehouse-list__header--mobile'>ADDRESS</p>
                                            <p className='warehouse-list__item'>{address}, {city}, {country}</p>
                                        </div>
                                    </div>
                                    <div className='warehouse-list__cell--right'>
                                        <div className='warehouse-list__table-cell'>
                                            <p className='warehouse-list__header--mobile'>CONTACT NAME</p>
                                            <p className='warehouse-list__item'>{contact_name}</p>
                                        </div>
                                        <div className='warehouse-list__table-cell'>
                                            <p className='warehouse-list__header--mobile'>CONTACT INFORMATION</p>
                                            <p className='warehouse-list__item'>{contact_phone}</p>
                                            <p className='warehouse-list__item'>{contact_email}</p>
                                        </div>
                                    </div>
                                </div>

                                <div className='warehouse-list__table-cell--bottom'>
                                    <button className='warehouse-list__delete-button'>
                                        <img src={deleteIcon} alt='Delete' />
                                    </button>
                                    <button className='warehouse-list__edit-button'>
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

export default WarehouseList;