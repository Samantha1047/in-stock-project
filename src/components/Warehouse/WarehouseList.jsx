import axios from 'axios';
import { useEffect, useState } from 'react-router-dom'
import TableHeader from '../TableHeader/TableHeader'
import editIcon from '../../assets/icons/edit-24px.svg'
import chevRight from '../../assets/icons/chevron_right-24px.svg'
import deleteIcon from '../../assets/icons/delete-outline-24px.svg'
import './WarehouseList.scss'

const API_URL = import.meta.env.VITE_APP_API_URL;

const WarehouseList = ({ setCurrentWarehouse }) => {
    const [warehouseList, setWarehouseList] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchWarehouses = async () => {
            try {
                const response = await axios.get(`${API_URL}/api/warehouses`);
                setWarehouseList(response.data);
            } catch (error) {
                console.error('Error fetching warehouse data: ', error)
            }
        };
        fetchWarehouses();
    }, []);

    const tableHeaders = ['WAREHOUSE', 'ADDRESS', 'CONTACT NAME', 'CONTACT INFORMATION', 'ACTIONS']
    const item = { id, warehouse_name, city, country, contact_name, contact_phone, contact_email }

    return (
        <section>
            <TableHeader columns={tableHeaders} />
        </section>
    )
}

export default WarehouseList;