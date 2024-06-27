import './Warehouse.scss'
import axios from 'axios'
import { useEffect, useState } from 'react'
import WarehouseList from '../../components/WarehouseList/WarehouseList'
import searchIcon from '../../assets/icons/search-24px.svg'
import { useNavigate } from 'react-router-dom'

const API_URL = import.meta.env.VITE_APP_API_URL

const Warehouse = () => {
  const [warehouseList, setWarehouseList] = useState([])
  const navigate = useNavigate()

  useEffect(() => {
    const fetchWarehouses = async () => {
      try {
        const response = await axios.get(`${API_URL}/api/warehouses`)
        const transformedData = response.data.map(item => ({
          warehouseId: item.id,
          warehouse_name: item.warehouse_name,
          address: item.address,
          city: item.city,
          country: item.country,
          contact_name: item.contact_name,
          contact_phone: item.contact_phone,
          contact_email: item.contact_email
        }))
        setWarehouseList(transformedData)
      } catch (error) {
        console.error('Error fetching warehouse data: ', error)
      }
    }
    fetchWarehouses()
  }, [])

  return (
    <main className='warehouse'>
      <div className='warehouse__header'>
        <h1 className='warehouse__title'>Warehouses</h1>
        <div>
          <input
            type='text'
            placeholder='Search...'
            className='warehouse__search'
          />
          <img
            className='warehouse__search-icon'
            src={searchIcon}
            alt='search icon'
          />
          <button
            onClick={() => navigate('/add')}
            className='warehouse__button'
          >
            + Add New Warehouse
          </button>
        </div>
      </div>
      <WarehouseList warehouseList={warehouseList} />
    </main>
  )
}

export default Warehouse
