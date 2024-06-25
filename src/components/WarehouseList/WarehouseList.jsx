import axios from 'axios';
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
// import editIcon from '../../assets/icons/edit-24px.svg'
// import chevRight from '../../assets/icons/chevron_right-24px.svg'
// import deleteIcon from '../../assets/icons/delete-outline-24px.svg'
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
            <div className='warehouse-list__headers'>
                {tableHeaders.map((header, index) => (
                    <div key={index} className='warehouse-list__header-column'>
                        <p>{header}</p>
                    </div>
                ))}
            </div>
            {warehouseList.map((item) => {
                const { id, warehouse_name, address, city, country, contact_name, contact_phone, contact_email } = item;
                return (
                    <article key={id} onClick={() => setCurrentWarehouse(item)}>
                        <div>
                            <Link to={`/warehouse/${id}`}>
                                <div>
                                    {warehouse_name}
                                </div>
                            </Link>
                        </div>
                        <div>
                            <p>{address}, {city}, {country}</p>
                        </div>
                        <div>
                            <p>{contact_name}</p>
                        </div>
                        <div>
                            <p>{contact_phone}</p>
                            <p>{contact_email}</p>
                        </div>
                    </article>
                )
            })
            }

        </section>
    )
}

export default WarehouseList;