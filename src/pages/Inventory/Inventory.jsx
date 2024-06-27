import "./Inventory.scss";
import InventoryList from '../../components/InventoryList/InventoryList'
import PageHeader from '../../components/PageHeader/PageHeader'
import axios from 'axios'
import { useEffect, useState } from 'react'

const API_URL = import.meta.env.VITE_APP_API_URL

const Inventory = () => {
  const [inventoryList, setInventoryList] = useState([])

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

  return <>
    <PageHeader
      title="Inventory"
      buttonText="+ Add New Item"
      buttonLink="/inventory/add"
    />
    <InventoryList inventoryList={inventoryList} showWarehouse={true} />
  </>
};

export default Inventory;
