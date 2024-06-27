import './Inventory.scss'
import InventoryList from '../../components/InventoryList/InventoryList'
import axios from 'axios'
import { useEffect, useState } from 'react'
import searchIcon from '../../assets/icons/search-24px.svg'
import { useNavigate } from 'react-router-dom'

const API_URL = import.meta.env.VITE_APP_API_URL

const Inventory = () => {
  const [inventoryList, setInventoryList] = useState([])
  const navigate = useNavigate()

  useEffect(() => {
    const fetchInventory = async () => {
      try {
        const response = await axios.get(`${API_URL}/api/inventories`)
        const transformedData = response.data.map(item => ({
          itemId: item.id,
          warehouse_name: item.warehouse_name,
          item_name: item.item_name,
          category: item.category,
          status: item.status,
          quantity: item.quantity
        }))

        setInventoryList(transformedData)
      } catch (error) {
        console.error('Error fetching inventory data: ', error)
      }
    }
    fetchInventory()
  }, [])

  return (
    <main className='inventory'>
      <div className='inventory__header'>
        <h1 className='inventory__title'>Inventory</h1>
        <div>
          <input
            type='text'
            placeholder='Search...'
            className='inventory__search'
          />
          <img
            className='inventory__search-icon'
            src={searchIcon}
            alt='search icon'
          />
          <button
            onClick={() => navigate('/inventory/add')}
            className='inventory__button'
          >
            + Add New Item
          </button>
        </div>
      </div>
      <InventoryList currentInventoryList={inventoryList} showWarehouse={true} />
    </main>
  )
}

export default Inventory
